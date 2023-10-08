module.exports = {
  "no-restricted-imports": "off",
  "@typescript-eslint/no-restricted-imports": [
    "warn",
    {
      name: "react-redux",
      importNames: ["useSelector", "useDispatch"],
      message: "Use typed hooks `useAppDispatch` and `useAppSelector` instead.",
    },
  ],
};
