import {
  clearApiKey,
  clearParams,
  setApiKey,
  useSearchParamsStore,
} from "@store/useSearchParamsStore";
import { Check, Eye, EyeOff, Key, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export function APIKeyModal() {
  const apiKey = useSearchParamsStore((s) => s.apiKey);
  const [key, setKey] = useState<string>(apiKey);
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const handleSetKey = () => {
    const modalSelect = document.getElementById(
      "modal-api-key"
    ) as HTMLDialogElement | null;

    if (apiKey && apiKey === key) {
      clearApiKey();
      clearParams();
      setKey("");
      modalSelect?.close();
      toast.success("API key cleared successfully");
    } else if (!key || apiKey !== key) {
      if (!key) {
        toast.error("You do not provide an API key");
        return;
      }

      setApiKey(key);
      modalSelect?.close();
      toast.success("API key set successfully");
    }
  };

  return (
    <dialog
      id="modal-api-key"
      className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
            <X className="size-4" />
          </button>
        </form>
        <h3 className="mb-4 text-lg font-bold">Set API Key</h3>

        <p className="text-base-content/70 text-sm leading-relaxed">
          Visit{" "}
          <a
            className="hover:text-accent underline transition-colors"
            href="https://wallhaven.cc/settings/account"
            target="_blank"
            rel="noopener noreferrer">
            https://wallhaven.cc/
          </a>
          , go to Profile/User {`->`} Settings {`->`} Account. Under "API Keys"
          section, copy the key, then paste below to enable NSFW access.
        </p>

        <p className="text-base-content/70 text-sm leading-relaxed">
          Make sure you provide correct key.
        </p>

        <fieldset className="fieldset mt-6">
          <div className="join">
            <label className="focus-within:outline-accent/40 focus-within:border-accent/60 input input-ghost border-base-content/10 w-full rounded-sm pr-1.5 text-sm font-medium">
              <input
                type={isPassword ? "password" : "text"}
                placeholder="API key here"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />

              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost group"
                onClick={() => setIsPassword(!isPassword)}>
                {isPassword ? (
                  <Eye className="text-base-content/70 group-hover:text-base-content size-4 transition-colors" />
                ) : (
                  <EyeOff className="text-base-content/70 group-hover:text-base-content size-4 transition-colors" />
                )}
              </button>
            </label>

            <button
              type="button"
              className="btn btn-square"
              onClick={handleSetKey}>
              {!key || apiKey !== key ? (
                <Check className="text-success size-4" />
              ) : (
                <X className="text-error size-4" />
              )}
            </button>
          </div>
          <p className="label text-[11px] whitespace-normal">
            The key will be saved in{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline">
              local storage(?)
            </a>
          </p>
        </fieldset>
      </div>

      <form
        method="dialog"
        className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export function BtnModalApiKey() {
  const handleOpen = () => {
    const modalSelect = document.getElementById(
      "modal-api-key"
    ) as HTMLDialogElement | null;

    if (modalSelect) {
      modalSelect.showModal();
    }
  };

  return (
    <button
      type="button"
      className="btn group btn-square"
      onClick={() => handleOpen()}>
      <Key className="text-base-content/70 group-hover:text-base-content size-5 transition-colors" />
    </button>
  );
}
