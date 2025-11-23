export default class Post {
    title: string;
    date: Date;
    img: string;

    constructor(title: string, img: string) {
        this.title = title;
        this.date = new Date();
        this.img = img;
    }

    toString(): string {
        return JSON.stringify(
            {
                title: this.title,
                date: this.date.toJSON(),
                img: this.img,
            },
            null,
            2
        );
    }
}