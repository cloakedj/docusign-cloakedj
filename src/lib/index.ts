// place files you want to import through the `$lib` alias in this folder.

interface Emoji{
    name: string;
    category: string;
    group: string;
    htmlCode: Array<string>;
    unicode: Array<string>;
}

type EmojiResponse = {
    emojis: Array<Emoji>;
    pages: number;
}

export { type Emoji, type EmojiResponse };