import { Item } from "./Item"

interface IParceRes {
	item: Item
	strRest?: string
}

export class RRTest {
	private readonly specialChar = /[\,\(\)]/
	private readonly open = /\(/g
	private readonly close = /\)/g

	public parse(input: string) {
		const cleanStr = input.replace(/\s/g, '')

		if(cleanStr.match(this.open).length !== cleanStr.match(this.close).length) {
			return undefined
		}

		return this.parceStr(cleanStr)?.item?.items[0]
	}

	private parceStr(str: string): IParceRes {
		const items: Item = new Item()
		let subStr = str

		while(subStr.length > 0) {
			const res = subStr.match(this.specialChar)

			if(res && res[0] === ',') {
				items.addValue(subStr.slice(0, res.index))
				subStr = subStr.slice(res.index + 1, subStr.length)
			} else if(res && res[0] === '(') {
				const value = subStr.slice(0, res.index)
				subStr = subStr.slice(res.index + 1, subStr.length)

				const parceRes = this.parceStr(subStr)
				parceRes.item.value = value ?? undefined
				items.addItem(parceRes.item)
				subStr = parceRes.strRest
			} else if(res && res[0] === ')') {
				items.addValue(subStr.slice(0, res.index))
				subStr = subStr.slice(res.index + 1, subStr.length)

				return { item: items, strRest: subStr }
			} else {
				return undefined
			}
		}

		return { item: items }
	}
}
