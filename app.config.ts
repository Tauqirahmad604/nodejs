export default defineAppConfig({
  nuxtIcon: {
    size: "24px",
    class: "",
  },
  ui: {
    strategy: "override",
    input: {
      rounded: "rounded-xl",
      size: { sm: "text-sm", md: "text-base", lg: "text-base" },
      gap: { sm: "gap-x-1.5", md: "gap-x-2", lg: "gap-x-2.5" },
      padding: { sm: "px-3 py-2", md: "px-4 py-3", lg: "px-5 py-4" },
      leading: {
        padding: { sm: "ps-8.5", md: "ps-11", lg: "ps-11.5" },
      },
      trailing: {
        padding: { sm: "pe-8.5", md: "pe-11", lg: "pe-11.5" },
      },
      icon: {
        size: { sm: "h-5 w-5", md: "h-6 w-6", lg: "h-6 w-6" },
        leading: { sm: "px-2.5", md: "px-3", lg: "px-3.5" },
      },
      default: { size: "md" },
    },
    formGroup: {
      wrapper: "",
      inner: "",
      label: {
        wrapper: "relative",
        base: "absolute top-0 left-[3rem] z-10 translate-y-[100%] m-transition  font-normal text-[15px] text-[#12022F]/50",
      },
      icon: {
        size: { sm: "!h-5 !w-5", md: "!h-6 !w-6", lg: "!h-6 !w-6" },
        leading: { sm: "!px-2.5", md: "!px-3", lg: "!px-3.5" },
      },
    },
    select: {
      rounded: "rounded-xl",
      size: { sm: "text-sm", md: "text-base", lg: "text-base" },
      gap: { sm: "gap-x-1.5", md: "gap-x-2", lg: "gap-x-2.5" },
      padding: { sm: "px-3 py-2", md: "px-4 py-3", lg: "px-5 py-4" },
      leading: {
        padding: { sm: "ps-8.5", md: "ps-11", lg: "ps-11.5" },
      },
      trailing: {
        padding: { sm: "pe-8.5", md: "pe-11", lg: "pe-11.5" },
      },
      icon: {
        size: { sm: "h-5 w-5", md: "h-6 w-6", lg: "h-6 w-6" },
        leading: { sm: "px-2.5", md: "px-3", lg: "px-3.5" },
      },
      default: { size: "md" },
      wrapper: "relative",
      base: " relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
      form: "form-select",
      placeholder: "text-gray-400 dark:text-gray-500",
      file: {
        base: "file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none",
      },
    },

    avatar: {
      text: "text-gray-100",
    },
    button: {
      rounded: "rounded-full",
      size: {
        "2xs": "text-xs w-fit",
        xs: "text-xs leading-3 w-fit",
        sm: "text-sm leading-3 w-fit",
        md: "text-md w-fit",
        lg: "text-md w-fit",
        xl: "text-base w-fit",
      },
      padding: {
        "2xs": "px-2 py-1",
        xs: "px-3 py-2",
        sm: "px-4 py-3.5",
        md: "px-4 py-2.5",
        lg: "px-6 py-3",
        xl: "px-3.5 py-2.5",
      },
      color: {
        blue: {
          solid: "text-white  bg-[#2C3B84] ",
        },
        red: {
          solid: "text-[#FFDADA]  bg-[#F25353] ",
        },
        orange: {
          solid: "text-[#FFDADA]  bg-[#FF8C29]",
          outline: "text-[#FF4949] ring-1 ring-[#FF4949]",
        },
        green: {
          solid: "text-[#E1FF29]  bg-[#3E6A36]",
        },
        cbgreen: {
          solid: 'text-cgreen-hi bg-cgreen-800 hover:bg-cgreen-900 ring-1 ring-inset ring-cgreen-800 hover:ring-cgreen-900',
          outline: 'text-cgreen-800 bg-white hover:bg-cgreen-200 ring-1 ring-inset ring-cgreen-900',
          soft: 'text-cgreen-800 bg-cgreen-200 hover:bg-cgreen-300 ring-1 ring-inset ring-cgreen-200 hover:ring-cgreen-300'
        },
        cblue: {
          solid: 'text-white bg-cblue-700 hover:bg-cblue-800 ring-1 ring-inset ring-cblue-700 hover:ring-cblue-800',
          outline: 'text-cblue-700 bg-white hover:bg-cblue-100 ring-1 ring-inset ring-cblue-700',
          soft: 'text-cblue-700 bg-cblue-100 hover:bg-cblue-200 ring-1 ring-inset ring-cblue-100 hover:ring-cblue-200'
        },
        cfuchsia: {
          solid: 'text-white bg-cfuchsia-600 hover:bg-cfuchsia-700 ring-1 ring-inset ring-cfuchsia-600 hover:ring-cfuchsia-700',
          outline: 'text-cfuchsia-600 bg-white hover:bg-cfuchsia-100 ring-1 ring-inset ring-cfuchsia-700',
          soft: 'text-cfuchsia-600 bg-cfuchsia-100 hover:bg-cfuchsia-200 ring-1 ring-inset ring-cfuchsia-100 hover:ring-cfuchsia-200'
        },
        crose: {
          solid: 'text-white bg-crose-500 hover:bg-crose-600 ring-1 ring-inset ring-crose-500 hover:ring-crose-600',
          outline: 'text-crose-500 bg-white hover:bg-crose-100 ring-1 ring-inset ring-crose-600',
          soft: 'text-crose-500 bg-crose-100 hover:bg-crose-200 ring-1 ring-inset ring-crose-100 hover:ring-crose-200'
        },
        czinc: {
          solid: 'text-white bg-czinc-700 hover:bg-czinc-800 ring-1 ring-inset ring-czinc-700 hover:ring-czinc-800',
          outline: 'text-czinc-700 bg-white hover:bg-czinc-100 ring-1 ring-inset ring-czinc-700',
          soft: 'text-czinc-700 bg-czinc-100 hover:bg-czinc-200 ring-1 ring-inset ring-czinc-100 hover:ring-czinc-200'
        },
      },
      variant: {
        solid:
          "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
        outline:
          "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
      },
      default: {
        size: "sm",
        variant: "solid",
        color: "primary",
        loadingIcon: "i-heroicons-arrow-path-20-solid",
      },
    },
    notifications: {
      position: "top-0 right-0 bottom-auto",
    },
    badge: {
      rounded: "rounded-full",
      font: "font-semibold capitalize",
      size: {
        sm: "text-xs px-3.5 py-1",
        md: "text-sm px-4 py-1",
        lg: "text-sm px-4.5 py-1.5",
      },
      color: {
        cbgreen: {
          solid:
            "text-cgreen-hi bg-cgreen-800 ring-1 ring-inset ring-cgreen-800",
          outline: "text-cgreen-800 bg-white ring-1 ring-inset ring-cgreen-900",
          soft: "text-cgreen-800 bg-cgreen-200 ring-1 ring-inset ring-cgreen-200",
        },
        cblue: {
          solid: "text-cblue-hi bg-cblue-700 ring-1 ring-inset ring-cblue-700",
          outline: "text-cblue-700 bg-white ring-1 ring-inset ring-cblue-700",
          soft: "text-cblue-700 bg-cblue-100 ring-1 ring-inset ring-cblue-100",
        },
        cfuchsia: {
          solid:
            "text-cfuchsia-hi bg-cfuchsia-600 ring-1 ring-inset ring-cfuchsia-600",
          outline:
            "text-cfuchsia-600 bg-white ring-1 ring-inset ring-cfuchsia-700",
          soft: "text-cfuchsia-600 bg-cfuchsia-100 ring-1 ring-inset ring-cfuchsia-100",
        },
        crose: {
          solid: "text-crose-hi bg-crose-500 ring-1 ring-inset ring-crose-500",
          outline: "text-crose-500 bg-white ring-1 ring-inset ring-crose-600",
          soft: "text-crose-500 bg-crose-100 ring-1 ring-inset ring-crose-100",
        },
        czinc: {
          solid: "text-czinc-hi bg-czinc-700 ring-1 ring-inset ring-czinc-700",
          outline: "text-czinc-700 bg-white ring-1 ring-inset ring-czinc-700",
          soft: "text-czinc-700 bg-czinc-100 ring-1 ring-inset ring-czinc-100",
        },
      },
      default: {
        size: "md",
      },
    },
    checkbox: {
      base: "h-5 w-5 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
    },
    breadcrumb: {
      li: "flex items-center gap-x-1.5 text-[#AC2785] text-sm leading-6 min-w-0",
      label: "block truncate capitalize",
      active: "text-[#AC2785]",
      inactive: "opacity-50 hover:opacity-100",
    },
    pagination: {
      wrapper: "flex items-center -space-x-px",
      base: "size-8 text-sm justify-center",
      rounded: "rounded",
      default: {
        size: "xs",
        activeButton: {
          color: "cbgreen",
        },
        inactiveButton: {
          color: "gray",
          variant: "link",
        },
        prevButton: {
          class: "!me-2",
          icon: "icon-jigsaw-angle-left rtl:icon-jigsaw-angle-right",
        },
        nextButton: {
          class: "!ms-2",
          icon: "icon-jigsaw-angle-right rtl:icon-jigsaw-angle-left",
        },
      },
    },
    table: {
      tr: {
        base: "even:bg-gray-50 bg-opacity-75",
      },
      th: {
        base: "text-left rtl:text-right bg-gray-50 bg-opacity-50",
        font: "font-bold capitalize",
        padding: "px-4 py-5",
      },
      td: {
        padding: "px-4 py-5",
        color: "text-gray-900 dark:text-white",
      },
    },
    toggle: {
      active: "bg-[#2C3B84] dark:bg-[#2C3B84]",
      container: {
        size: {
          "2xl": "h-6 w-6 mt-0.5 left-0.5 ",
        },
      },
    },
  },
});
