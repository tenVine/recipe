export class Recipe {
    constructor(
        public id: string,
        public title: string,
        public timeCook: string,
        public desc: string,
        public imageUrl: string
    ) {}
}