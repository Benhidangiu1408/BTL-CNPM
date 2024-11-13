import React from "react";
// import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch";
// import DarkModeToggle from "./DarkModeToggle";
import { SwitchProps } from "./AppMenuBar";

const AppSwitch = ({ isDarkMode, handleToggle }: SwitchProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        checked={isDarkMode}
        onCheckedChange={handleToggle}
      />
      {/* <Label htmlFor="airplane-mode">Airplane Mode</Label> */}
      {/* <DarkModeToggle isDarkMode={} /> */}
    </div>
  );
};

export default AppSwitch;
