const labelKeys = [
    'OWA_ACCOUNT_MENU_ITEM',
    'OWA_ACCOUNT_SUBSCRIPTION_TITLE',
    'OWA_ACTIVITY_TITLE',
    'OWA_ARMSTATE_ACTION_CANCEL',
    'OWA_ARMSTATE_ACTION_OK',
    'OWA_AUTOMATION_TITLE',
    'OWA_CLIMATE_GRAPH',
    'OWA_DEVICE_SETTINGS_TITLE',
    'OWA_DEVICES_TITLE',
    'OWA_DOOR_LOCK_ARMING',
    'OWA_DOOR_LOCK_AUTO_LOCK',
    'OWA_DOOR_LOCK_CODE',
    'OWA_DOOR_LOCK_LOCK',
    'OWA_DOOR_LOCK_PIN_AND_TAG']

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

      