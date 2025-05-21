export const customStyles = {
  control: (base) => ({
    ...base,
    borderRadius: "12px",
    border: "none",
    boxShadow: "none",
    backgroundColor: " #f7f7f7",
    width: "204px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  placeholder: (base) => ({
    ...base,
    fontFamily: "var(--font-family)",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.25",
    color: "#101828",
    border: "none",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "12px",
    boxShadow: " 0 4px 36px 0 rgba(0, 0, 0, 0.02)",
    color: "#8d929a",
    border: "none",
    backgroundColor: " #f7f7f7",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: " #f7f7f7",
    color: state.isSelected ? "#101828" : state.isFocused ? "#101828" : null,

    padding: "10px",
    border: "none",
  }),
};
