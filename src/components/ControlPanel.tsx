import { ModeToggle } from "./menu-toggle";
import { TypographyH1 } from "./typography/H1";

const ControlPanel = () => {
  return (
    <div className="h-screen max-h-screen w-md bg-slate-100 dark:bg-slate-600 p-4">
      <div className="flex justify-between items-center">
        <TypographyH1> Micro Trace</TypographyH1>
        <ModeToggle />
      </div>
    </div>
  );
};

export default ControlPanel;
