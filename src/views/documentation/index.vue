<template>
  <div class="app-container documentation-container">
    <dropdown-menu :items="gitList" style="float:left;margin-left:50px;" title="Github Repo" />
    <dropdown-menu :items="articleList" style="float:left;margin-left:50px;" title="相关指南" />
    <dropdown-menu :items="orgList" style="float:left;margin-left:50px;" title="相关机构" />
  </div>
</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'

export default {
  name: 'Documentation',
  components: { DropdownMenu },
  data() {
    return {
      articleList: [
        { title: '比特币白皮书', href: ' http://www.8btc.com/wiki/bitcoin-a-peer-to-peer-electronic-cash-system' },
        { title: '以太坊', href: 'https://ethfans.org/' },
        { title: '超级账本白皮书', href: ' http://www.8btc.com/hyperledger-whitepaper' },
        { title: '蚂蚁区块链', href: 'https://tech.antfin.com/blockchain' },
        { title: '百度区块链', href: 'https://xchain.baidu.com/' },
        { title: 'FISCO BCOS', href: 'https://github.com/FISCO-BCOS/whitepaper' },
        { title: '布比区块链', href: 'https://www.bubi.cn/' },
        { title: '飞洛-趣链区块链平台', href: ' https://filoop.com/index' }
      ],
      orgList: [
        { title: '广州大学', href: 'http://www.gzhu.edu.cn/' },
        { title: '广州大学网研院', href: 'http://wyy.gzhu.edu.cn/index.htm' },
        { title: '鹏城实验室', href: 'http://www.pcl.ac.cn/' },
        { title: '合天网安实验室', href: 'http://www.hetianlab.com/' },
        { title: '中科院信工所', href: 'http://www.iie.ac.cn/' },
        { title: '万向区块链实验室', href: 'https://www.wxblockchain.com/' }
      ],
      gitList: [
        { title: 'Bitcoin', href: ' https://github.com/bitcoin/bitcoin' },
        { title: 'ethereum', href: 'https://github.com/ethereum' },
        { title: 'solidity', href: 'https://github.com/ethereum/solidity' },
        { title: 'fabric', href: 'https://github.com/hyperledger/fabric' },
        { title: 'burrow', href: 'https://github.com/hyperledger/https://github.com/hyperledger/burrow' },
        { title: 'iroha', href: 'https://github.com/hyperledger/iroha' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  .document-btn {
    float: left;
    margin-left: 50px;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
