import { keyframes } from "@emotion/react";

export const fadeInPushUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`;
export const fadeInPushRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-15px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}`;

export const nullAnim = keyframes`
    from { opacity: 1 }
    to { opacity: 1 }
}`