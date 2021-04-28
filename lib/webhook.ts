
export class WebHookBody {

  /** A unique identifier for the call. */
  call_sid!: String;

  /** A unique identifier for the jambonz application controlling this call */
  application_sid!: String;

  /**A unique identifier for the jambonz account associated with the application */
  account_sid!: String;

  /** the direction of the call: 
   * inbound or outbound */
  direction!: 'inbound' | 'outbound';

  /** The calling party number */
  from!: String;

  /** the called party number */
  to!: String;

  /** the caller name, if known */
  caller_id!: String;

  /** current status of the call, see table below */
  call_status!: 'trying'|'ringing'|'early-media'|'in-progress'|'completed'|'failed'|'busy'|'no-answer';

  /** the most recent sip status code received or generated for the call */
  sip_status!: String;

  /**the call_sid of a parent call to this call, if this call is a child call */
  parent_call_sid?: String;

  /** name of the SIP trunk that originated the call to the platform */
  originating_sip_trunk_name?: String;

  /** the ip address and port of the sip gateway that originated the call */
  originating_sip_ip?: string;

  sip?: Record<string, string>;
  
  constructor(data?: Partial<WebHookBody>) {
    Object.assign(this, data);
  }
}