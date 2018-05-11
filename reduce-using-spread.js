const labelKeys = [
    'FOO',
    'BAR',
    'BAZ',
]

    /*
    Dynamically sets key:value using only a defined value, allowing a simple default definition
    */
    labelKeys.reduce(
        (obj, labelKey) => ({
          ...obj,
          [labelKey]: labelKey,
        }),
        {},
      )

      