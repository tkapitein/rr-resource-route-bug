import { ActionFunctionArgs } from "react-router";
import { createThemeAction } from "~/react-router-theme";
import { themeSessionResolver } from "~/sessions.server";

export const action = (params: ActionFunctionArgs) => {
  return createThemeAction(themeSessionResolver)(params);
};
