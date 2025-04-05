import { PlusIcon } from "lucide-react";
import { ModeToggle } from "./menu-toggle";
import { TypographyH1 } from "./typography/H1";
import { TypographyP } from "./typography/P";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import NewPortForm from "./control-panel/NewPortForm";
import PortsList from "./control-panel/PortsList";
import useGlobalStore from "@/lib/store";

const ControlPanel = () => {
  const isRecording = useGlobalStore((state) => state.isRecording);
  const toggleRecording = useGlobalStore((state) => state.toggleRecording);

  return (
    <div className="h-screen max-h-screen w-md bg-slate-100 dark:bg-slate-600 p-4 flex flex-col items-stretch justify-between">
      <div className="flex flex-col gap-4 items-stretch">
        <div className="flex justify-between items-center">
          <TypographyH1> Micro Trace</TypographyH1>
          <ModeToggle />
        </div>
        <NewPortForm />

        <Separator orientation="horizontal" />
        <PortsList />
      </div>

      <Button onClick={() => toggleRecording()}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </Button>
    </div>
  );
};

export default ControlPanel;
