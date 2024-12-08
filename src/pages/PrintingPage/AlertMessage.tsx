import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { useState } from "react";

const AlertMessage = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility

  // Function to open the dialog when called
  const openDialog = () => {
   return setIsDialogOpen(true); // Open the AlertDialog
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false); // Close the AlertDialog
  };
  return (
    <AlertDialog  open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel onClick={closeDialog}>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={closeDialog}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  );
};

export default {AlertMessage,openDialog};
