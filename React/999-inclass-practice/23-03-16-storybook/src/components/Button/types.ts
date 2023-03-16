export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;

  backgroundColor?: string;

  size?: "small" | "medium" | "large";

  label: string;

  onClick?: () => void;
}
