import { proxy, useSnapshot } from "valtio";
import { devtools } from "valtio/utils";

export const feedback = proxy({
    element: (<></>) as JSX.Element,
    loading: false,
});

devtools(feedback, "Feedback");

// This component is wired up to the application layout.
//
// To launch an alert, modal, or other transient component,
// pass the JSX component directly into the feedback store.
//
export const Feedback = () => {
    const feedbackStore = useSnapshot(feedback);

    const ElementType = feedbackStore.element?.type;
    const children = feedbackStore.element?.props.children;

    return <>{feedbackStore.element && <ElementType>{children}</ElementType>}</>;
};
