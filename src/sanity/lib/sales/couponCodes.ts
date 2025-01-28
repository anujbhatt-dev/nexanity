export const COUPON_CODE = {
    BFRIDAY:"BFRIDAY",
    WFRIDAY:"WFRIDAY"
} as const;

export type CouponCode = keyof typeof COUPON_CODE;