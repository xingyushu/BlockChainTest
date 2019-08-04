const steps = [
  {
    element: '#hamburger-container',
    popover: {
      title: 'Hamburger',
      description: ' 打开或关闭侧边栏',
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: 'Breadcrumb',
      description: '显示当前页面位置',
      position: 'bottom'
    }
  },
  {
    element: '#header-search',
    popover: {
      title: 'Page Search',
      description: '页面查询快速导航',
      position: 'left'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: 'Screenfull',
      description: '全屏显示',
      position: 'left'
    }
  },
  {
    element: '#size-select',
    popover: {
      title: 'Switch Size',
      description: '调整系统大小',
      position: 'left'
    }
  },
  {
    element: '#tags-view-container',
    popover: {
      title: 'Tags view',
      description: '访问历史记录',
      position: 'bottom'
    },
    padding: 0
  }
]

export default steps
