import { FileBlockProps } from "@githubnext/blocks";
import { Deck, MarkdownSlideSet,  } from 'spectacle'

export default function (props: FileBlockProps) {
  const { content } = props;

  return (
      <Deck>
        <MarkdownSlideSet>
          {content}
        </MarkdownSlideSet>
      </Deck>
  );
}