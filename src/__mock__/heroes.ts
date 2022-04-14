export interface Hero {
	id: number,
  name: string,
  description: string
}

const heroes: Hero[] = [
  { id: 1, name: 'Bat Man', description: "I'm rich" },
  { id: 2, name: 'Spider Man', description: "I'm pool" },
  { id: 3, name: 'Iron Man', description: 'High tech' },
  { id: 4, name: 'Black Widow', description: 'From Red Room' },
  { id: 5, name: 'Black Panther', description: 'Wakanda forever' },
]

export default heroes
