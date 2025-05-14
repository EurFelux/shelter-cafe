// uuid
import { v4 as uuidv4 } from 'uuid'

export const generateUUID = () => {
  return uuidv4()
}

// format number
import numeral from 'numeral'
export const formatNumber = (x: number, fmt: string = '0a') => {
  return numeral(x).format(fmt)
}
