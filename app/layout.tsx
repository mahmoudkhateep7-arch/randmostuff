import { Metadata } from "next";
import { ReactNode } from "react";
import ReduxWrapper from "./store";

export const metadata: Metadata = {
  title: "bg changes"
}

export default function Rootlayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxWrapper>{children}</ReduxWrapper>
      </body>
    </html>
  )
}