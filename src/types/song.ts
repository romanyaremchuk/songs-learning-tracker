export interface Song {
  id: string;
  name: string;
  url: string;
  status: "wantToLearn" | "learning" | "learned";
}
