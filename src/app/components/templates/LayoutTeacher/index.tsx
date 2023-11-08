import { ReactNode } from "react";
import einstein from "public/einstein.jpeg";

import { Navbar } from "../../molecules/Navbar";

interface Props {
  children: ReactNode;
}

export function LayoutTeacher({ children }: Props) {
  return (
    <main>
      <Navbar
        pages={["My teachers", "My students", "Calendar"]}
        avatar={einstein}
      />
      {children}
    </main>
  );
}
