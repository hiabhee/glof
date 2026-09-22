import { redirect } from "next/navigation";

// Some local browser contexts open a conventional /workspace path. The app's
// actual entry point is /, so keep that stale route usable rather than showing
// a 404 or leaving users on the wrong page.
export default function WorkspaceCompatibilityPage() {
  redirect("/");
}
