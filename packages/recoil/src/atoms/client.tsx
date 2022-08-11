import { atom, selector } from "recoil";
import {
  ChannelAppUi,
  ChannelAppUiClient,
  ChannelAppUiResponder,
  CHANNEL_POPUP_RPC,
  CHANNEL_POPUP_RESPONSE,
  CHANNEL_SOLANA_CONNECTION_RPC_UI,
} from "@coral-xyz/common";

/**
 * Allows the app ui to send requests to the background script.
 * This is the primary way the UI communicates with the background.
 */
export const backgroundClient = atom<ChannelAppUiClient>({
  key: "backgroundClient",
  default: ChannelAppUi.client(CHANNEL_POPUP_RPC),
});

/**
 * Allows the app ui to respond to requests to the background script.
 * This only happens when a third party web app requests permission
 * from the app for something.
 */
export const backgroundResponder = atom<ChannelAppUiResponder>({
  key: "backgroundResponseClient",
  default: ChannelAppUi.responder(CHANNEL_POPUP_RESPONSE),
});

/**
 * Channel for proxying solana Connection requests to be fulfilled by
 * the background.
 */
export const connectionBackgroundClient = selector({
  key: "connectionBackgroundClient",
  get: ({ get }) => {
    return ChannelAppUi.client(CHANNEL_SOLANA_CONNECTION_RPC_UI);
  },
});
