import { Bookmark, DotsThreeOutlineVertical } from "phosphor-react";
import { HeaderComponent, Icon } from "./styles";

export function Header() {
  return (
    <HeaderComponent>
      <Icon>
        <Bookmark size={32} />
        LIVROS À JATO
      </Icon>

      <button>
        <DotsThreeOutlineVertical size={32} />
      </button>
    </HeaderComponent>
  );
}
