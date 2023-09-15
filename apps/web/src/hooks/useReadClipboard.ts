import { useEffect, useState } from "react";

export default function useReadClipboard() {
  const [value, setValue] = useState<string | null>(null);
  const [permission, setPermission] = useState<string>("");

  useEffect(() => {
    // ? https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1245
    void navigator.permissions
      .query({ name: "clipboard-read" as PermissionName })
      .then((result) => {
        setPermission(result.state);
        if (result.state === "granted" || result.state === "prompt") {
          navigator.clipboard.readText().then(
            (clipText) => setValue(clipText),
            () => setValue(null),
          );
        } else {
          setValue(null);
        }
      });
  }, []);

  return { permission, value };
}
