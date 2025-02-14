import * as proto1000000 from './1.0.0'
import * as proto1000001 from './1.0.1'
import * as proto1000002 from './1.0.2'
import * as proto1001000 from './1.1.0'

export interface OldProto {
  1000000: typeof proto1000000
  1000001: typeof proto1000001
  1000002: typeof proto1000002
  1001000: typeof proto1001000
}

export const oldProto: OldProto = {
  1000000: proto1000000,
  1000001: proto1000001,
  1000002: proto1000002,
  1001000: proto1001000,
}

export { default as encodeProject } from './encodeProject'
export { default as toOriginBuffer } from './toOriginBuffer'
export * from './project'
export { default } from './project'
