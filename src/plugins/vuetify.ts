import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import type { VDataTable } from 'vuetify/lib/components/index.mjs'
import { Icon, type IconProps } from '@iconify/vue'
export type DataTableHeaders = InstanceType<
  typeof VDataTable
>['$props']['headers']

const theme = {
  primary: localStorage.getItem('theme-primary') || '#1697f6',
}

export default createVuetify({
  blueprint: md3,
  defaults: {
    VSwitch: {
      color: 'primary',
    },
    VDataTable: {
      fixedHeader: true,
      hover: true,
    },
    VCard: {
      flat: true,
      border: true,
    },
    VBtn: { color: undefined },
    VNavigationDrawer: {
      VList: {
        nav: true,
        VListItem: {
          rounded: 'xl',
        },
      },
    },
    VChip: { rounded: 'lg' },
  },
  theme: {
    themes: {
      light: {
        colors: theme,
      },
      dark: {
        colors: theme,
      },
    },
  },
  icons: {
    defaultSet: 'iconify',
    aliases: {
      collapse: 'mdi-chevron-up',
      complete: 'mdi-check',
      cancel: 'mdi-close-circle',
      close: 'mdi-close',
      delete: 'mdi-close-circle',
      // delete (e.g. v-chip close)
      clear: 'mdi-close-circle',
      success: 'mdi-check-circle',
      info: 'mdi-information',
      warning: 'mdi-alert-circle',
      error: 'mdi-close-circle',
      prev: 'mdi-chevron-left',
      next: 'mdi-chevron-right',
      checkboxOn: 'mdi-checkbox-marked',
      checkboxOff: 'mdi-checkbox-blank-outline',
      checkboxIndeterminate: 'mdi-minus-box',
      delimiter: 'mdi-circle',
      // for carousel
      sortAsc: 'mdi-arrow-up',
      sortDesc: 'mdi-arrow-down',
      expand: 'mdi-chevron-down',
      menu: 'mdi-menu',
      subgroup: 'mdi-menu-down',
      dropdown: 'mdi-menu-down',
      radioOn: 'mdi-radiobox-marked',
      radioOff: 'mdi-radiobox-blank',
      edit: 'tabler:pencil',
      ratingEmpty: 'mdi-star-outline',
      ratingFull: 'mdi-star',
      ratingHalf: 'mdi-star-half-full',
      loading: 'mdi-cached',
      first: 'mdi-page-first',
      last: 'mdi-page-last',
      unfold: 'mdi-unfold-more-horizontal',
      file: 'mdi-paperclip',
      plus: 'mdi-plus',
      minus: 'mdi-minus',
      calendar: 'mdi-calendar',
      eyeDropper: 'mdi-eyedropper',
      // custom
      search: 'mdi-magnify',
      actionDelete: 'tabler:trash',
    },
    sets: {
      iconify: {
        // @ts-expect-error Parameter props implicitly has an any type.
        component: (props: IconProps & { size?: null | string | number }) => {
          return h<IconProps>(Icon, props)
        },
      },
    },
  },
  display: {
    mobileBreakpoint: 'sm',
  },
})
