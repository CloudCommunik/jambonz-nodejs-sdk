import { DataObject, DialTarget, Hook } from "../utils";
import { BaseVerb } from "./base";
import { Listen } from "./listen";

/**
 * The dial verb is used to create a new call by dialing out to a number, a registered sip user, or sip endpoint.
 * https://docs.jambonz.org/jambonz/#dial
 */
export class Dial extends BaseVerb {

  /** webhook to invoke when the call ends */
  actionHook?: string | Hook;

  /** If set to true, the inbound call will ring until the number that was dialed answers the call, 
   * and at that point a 200 OK will be sent on the inbound leg. 
   * If false, the inbound call will be answered immediately as the outbound call is placed. Defaults to false. */
  answerOnBridge?: string;

  /** The inbound caller's phone number, which is displayed to the number that was dialed. 
   The caller ID must be a valid E.164 number.
  Defaults to caller id on inbound call. */
  callerId?: string;
  
  /** webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. 
   * This allows the caller to provide information to the dialed number, giving them the opportunity to decline the call, before they answer the call. Note that if you want to run different applications on specific destinations, you can specify the 'url' property on the nested target object. */
  confirmHook?: string | Hook;

  /** url that specifies a .wav or .mp3 audio file of custom audio 
   * or ringback to play to the caller while the outbound call is ringing. */
  dialMusic?: string;

  /** an array of strings that represent dtmf sequence which, when detected, 
   * will trigger a mid-call notification to the application via the configured dtmfHook */
  dtmfCapture?: string[];

  /** a webhook to call when a dtmfCapture entry is matched. 
   * This is a notification only -- no response is expected, 
   * and any desired actions must be carried out via the REST updateCall API. */
  dtmfHook?: string | Hook;
  
  /** an object containing arbitrary sip headers to apply to the outbound call attempt(s) */
  headers?: Object;

  /**a nested listen action, which will cause audio from the call to be streamed 
   * to a remote server over a websocket connection	 */
  listen?: Listen[]

  /** array of to 10 destinations to simultaneously dial. 
   * The first person (or entity) to answer the call will be connected to the caller and the rest of the called numbers will be hung up. */
  target!: DialTarget[]

  constructor(data?: Partial<Dial>) {
    super('dial', data)
  }

} 