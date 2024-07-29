import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export function Modal({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{name}</Button>
      </DialogTrigger>
      <DialogContent className="w-full overflow-auto">
        <DialogTitle></DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
}
