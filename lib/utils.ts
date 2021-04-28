export  class Hook {
  url!: string
  method!: string
  username?: string
  password?: string
}

type BasicAuthCredentials = {username: string, password: string}
export class DialTarget {
  type!: 'phone' | 'sip' | 'user' | 'teams'
 
  /** A webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. 
   * This will override the confirmHook property set on the parent dial verb, if any. */
  confirmHook?: string;
  
  /** a telephone numnber in E.164 number	 */
  number?: string;

  sipUri?: string;

  auth?: BasicAuthCredentials;

  /** registered sip user, including domain (e.g. "joeb@sip.jambonz.org")	 */
  name?: string

  /** Microsoft Teams customer tenant domain name. 
   * Will default to the Microsoft Teams tenant associated with the account of the calling party.	 */
  tenant?: string

  /** if true, dial directly into user's voicemail to leave a message	 */
  voicemail?: string

}
/**
 * An extension of the built-in Partial<T> type which allows partial values
 * in deeply nested properties too.
 */
export declare type DeepPartial<T> = Partial<T> | {
  [P in keyof T]?: DeepPartial<T[P]>;
};
/**
* Type alias for strongly or weakly typed objects of T
*/
export declare type DataObject<T extends object> = T | DeepPartial<T>;