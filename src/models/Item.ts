export class Item {
	value: string
	public items: Item[] = []

	public constructor(val: string = undefined) {
		this.value = val
	}

	public addItem(item: Item) {
		this.items.push(item)
	}

	public addValue(val: string) {
		if(val && val.length > 0) {
			this.items.push(new Item(val))
		}
	}

	public sort(item: Item = this): Item {
		if(!item || !item.items || item.items.length === 0) {
			return undefined
		}

		const res = item.items.sort((a, b) => {
			if(a.items.length > 0) {
				this.sort(a)
			} else if(b.items.length > 0) {
				this.sort(b)
			}

			if(a.value < b.value) {
				return -1
			} else if(a.value > b.value) {
				return 1
			} else {
				return 0
			}
		})

		const resItem = new Item(item.value)
		resItem.items = res

		return item
	}

	public toString(item: Item = this, level: number = 1) {
		if(!item || !item.items || item.items.length === 0) {
			return
		}

		let resStr = ''

		item.items.forEach(i => {
			if(i.value && i.value.length > 0) {
				resStr += new Array(level).join('  ') + '- ' + i.value + '\n'
			}

			if(i.items.length > 0) {
				resStr += this.toString(i, level + 1)
			}
		})

		return resStr
	}
}
