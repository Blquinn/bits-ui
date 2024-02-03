import type {
	WithAsChild,
	PrimitiveButtonAttributes,
	PrimitiveDivAttributes,
	Transition,
	TransitionParams,
} from "$lib/internal/index.js";

interface BaseAccordionProps {
	asChild?: boolean;
	disabled?: boolean;
	forceVisible?: boolean;
	el?: HTMLElement | null;
}

interface SingleAccordionProps extends BaseAccordionProps {
	type: "single";
	value?: string;
}

interface MultipleAccordionProps extends BaseAccordionProps {
	type: "multiple";
	value?: string[];
}

export type AccordionRootProps = WithAsChild<SingleAccordionProps | MultipleAccordionProps> &
	PrimitiveDivAttributes;

// export type AccordionRootWithoutHTML = Omit<AccordionRootProps, keyof PrimitiveDivAttributes>;

export type AccordionTriggerProps = WithAsChild<{
	disabled?: boolean;
	onclick?: (e: MouseEvent) => void;
	onkeydown?: (e: KeyboardEvent) => void;
	el?: HTMLElement | null;
}> &
	Omit<PrimitiveButtonAttributes, "disabled">;

export interface AccordionTriggerWithoutHTML
	extends Omit<AccordionTriggerProps, keyof Exclude<PrimitiveButtonAttributes, "disabled">> {}

export interface AccordionItemContext {
	value: string;
	disabled: boolean;
}

export type AccordionItemProps = WithAsChild<{
	value: string;
	disabled?: boolean;
	el?: HTMLElement | null;
}> &
	PrimitiveDivAttributes;

export interface AccordionItemWithoutHTML
	extends Omit<AccordionItemProps, keyof PrimitiveDivAttributes> {}

export type AccordionContentProps<
	T extends Transition = Transition,
	In extends Transition = Transition,
	Out extends Transition = Transition,
> = WithAsChild<{
	transition?: T;
	transitionConfig?: TransitionParams<T>;
	inTransition?: In;
	inTransitionConfig?: TransitionParams<In>;
	outTransition?: Out;
	outTransitionConfig?: TransitionParams<Out>;
}> &
	PrimitiveDivAttributes;

export type AccordionHeaderProps = WithAsChild<{
	asChild?: boolean;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}> &
	PrimitiveDivAttributes;
