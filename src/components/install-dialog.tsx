import * as Dialog from "@radix-ui/react-dialog";
import { useTr } from "@/i18n/locale";

export function InstallDialog({ label }: { label: string }) {
  const tr = useTr();
  return (
    <Dialog.Root>
      <Dialog.Trigger className="min-h-11 rounded-xl border-2 border-ink/15 bg-sand px-3 py-2 text-sm font-extrabold text-ink">
        {label}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[min(100%-2rem,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-sand p-5 text-ink shadow-none">
          <Dialog.Title className="font-display text-2xl text-sky">{tr("Add to iPhone or iPad")}</Dialog.Title>
          <Dialog.Description className="mt-2 text-base">{tr("Use Safari. Then follow these steps.")}</Dialog.Description>
          <ol className="mt-4 space-y-3 text-lg">
            <li className="rounded-xl bg-gold px-3 py-3 font-bold text-ink">{tr("1. Open this page in Safari.")}</li>
            <li className="rounded-xl bg-gold px-3 py-3 font-bold text-ink">{tr("2. Tap Share.")}</li>
            <li className="rounded-xl bg-gold px-3 py-3 font-bold text-ink">{tr("3. Tap Add to Home Screen.")}</li>
          </ol>
          <Dialog.Close className="mt-4 min-h-11 w-full rounded-xl bg-sky px-4 py-3 font-extrabold text-sand">
            {tr("Close")}
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
