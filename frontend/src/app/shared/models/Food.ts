export class Food{
  // Elements with ! are required.
  id!: string;
  name!: string;
  price!: number;
  favorite!: boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
  // Elements with ? are optional.
  tags?: string[];
}
