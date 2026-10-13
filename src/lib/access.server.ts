import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { getCookie, getRequest, setCookie } from "@tanstack/react-start/server";

const COOKIE = "ere-access";
const PAYLOAD = "ere-open";
const MAX_AGE = 60 * 60 * 24 * 180;

/** SHA-256 of the compact key (letters and digits only, upper case). */
const KEY_HASHES = ["417c97b8a047bb736ab61a4e5b201b295a7aad0f96afc31e418caf134c39c61e"];

function compact(key: string) {
  return key.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function digest(key: string) {
  return createHash("sha256").update(compact(key)).digest();
}

function same(left: Buffer, right: Buffer) {
  return left.length === right.length && timingSafeEqual(left, right);
}

function pepper() {
  return process.env.ACCESS_COOKIE_SECRET?.trim() || "ere-preview-cookie-v1";
}

function signature() {
  return createHmac("sha256", pepper()).update(PAYLOAD).digest("hex");
}

function extraKeys() {
  return (process.env.ACCESS_KEYS ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function keyIsValid(key: string) {
  const given = digest(key);
  if (!compact(key)) return false;
  for (const plain of extraKeys()) {
    if (same(given, digest(plain))) return true;
  }
  for (const hex of KEY_HASHES) {
    if (same(given, Buffer.from(hex, "hex"))) return true;
  }
  return false;
}

export function readAccess() {
  const value = getCookie(COOKIE);
  if (!value) return false;
  const expected = Buffer.from(signature());
  const given = Buffer.from(value);
  return same(given, expected);
}

export function grantAccess() {
  const request = getRequest();
  const proto = request.headers.get("x-forwarded-proto") ?? new URL(request.url).protocol.replace(":", "");
  setCookie(COOKIE, signature(), {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: proto === "https",
    maxAge: MAX_AGE,
  });
}
