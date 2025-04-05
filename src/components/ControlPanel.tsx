import { PlusIcon } from "lucide-react";
import { ModeToggle } from "./menu-toggle";
import { TypographyH1 } from "./typography/H1";
import { TypographyP } from "./typography/P";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import NewPortForm from "./control-panel/NewPortForm";
import PortsList from "./control-panel/PortsList";

const ControlPanel = () => {
  return (
    <div className="h-screen max-h-screen w-md bg-slate-100 dark:bg-slate-600 p-4 flex flex-col items-stretch gap-4">
      <div className="flex justify-between items-center">
        <TypographyH1> Micro Trace</TypographyH1>
        <ModeToggle />
      </div>
      <NewPortForm />

      <Separator orientation="horizontal" />
      <PortsList />
    </div>
  );
};

export default ControlPanel;
