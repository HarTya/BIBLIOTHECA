export interface InputProps {
    value: string,
    setValue: (value: string) => void,
    placeholder?: string,
    type?: string,
    autoFocus?: boolean
}

export interface ProductProps {
    id: string,
    image?: string,
    name: string,
    price: number,
    alternativeProposal?: string,
    description?: string,
    caption?: string,
    country?: string,
    categoryId: string
}

export interface CategoryProps {
    id: string,
    image?: string,
    name: string,
    menu: number
}