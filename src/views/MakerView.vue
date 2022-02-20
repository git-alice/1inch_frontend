<template>
  <div class="container-fluid" id="full-size">
    <div class="row h-100">
      <div
        class="col-12 d-flex justify-content-center align-items-center"
        style="background-color: #4a306d; color: white; height: 400px"
      >
        <div class="col-6 h4">// 1. Заполнить данные об опционе</div>
        <div class="col-6">
          <AceEditor
            v-model="json"
            @init="editorInit"
            lang="javascript"
            theme="monokai"
            width="100%"
            height="200px"
            :options="{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              fontSize: 14,
              highlightActiveLine: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
              showPrintMargin: false,
              showGutter: true,
            }"
            :commands="[
              {
                name: 'save',
                bindKey: { win: 'Ctrl-s', mac: 'Command-s' },
                exec: dataSumit,
                readOnly: true,
              },
            ]"
          />
        </div>
      </div>
      <div
        class="col-12 d-flex justify-content-center align-items-center"
        style="background-color: #e8d7f1; height: 400px"
      >
        <div class="col-6 h4">
          // 2. Дать апрув на токен который хотите продать
        </div>
        <div class="col-6">
          <a-button type="dashed" style="transform: scale(1.5)"
            >Token A</a-button
          >
          <br />
          <br />
          <br />
          <a-button type="dashed" style="transform: scale(1.5)"
            >Token B</a-button
          >
        </div>
      </div>
      <div
        class="col-12 d-flex justify-content-center align-items-center"
        style="background-color: #a167a5; color: white; height: 400px"
      >
        <div class="col-6 h4">// 3. Создать опцион</div>
        <div class="col-6">
          <a-button type="dashed" style="transform: scale(1.5)">Mint</a-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import Web3 from "web3";
import { ethers } from "ethers";

import AceEditor from "vuejs-ace-editor";

const defaultJson = `
{
  "token_a": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
  "token_a_amount": 100,
  "token_b": "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "token_b_amount": 1000,
  "experation_time_start": "2021-02-19",
  "experation_time_end": "2021-05-19"
}
`;

const requiredErc20Abi = [
  // Some details about the token
  "function name() view returns (string)",
  "function symbol() view returns (string)",

  // Get the account balance
  "function balanceOf(address) view returns (uint)",

  // Send some of your tokens to someone else
  "function transfer(address to, uint amount)",

  // Approve
  "function approve(address, uint256) public returns (bool)",

  // An event triggered whenever anyone transfers to someone else
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

export default {
  components: { AceEditor },
  data() {
    return {
      // web3: new Web3(window.web3.currentProvider),
      ethers_provider: new ethers.providers.Web3Provider(window.ethereum),
      json: defaultJson,
    };
  },
  mounted() {
    // console.log(this.web3);
    const UNI = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // UNI
    // const contractAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' // UNI ROUTER
    // const contractAddress = "0x3ef51736315f52d568d6d2cf289419b9cfffe782"; // 1inch limit order

    const UNIcontract = new ethers.Contract(
      UNI,
      requiredErc20Abi,
      this.ethers_provider
    );

    // this.ethers_provider.getBalance(walletAddress).then((res) => console.log(res));

    // this.ethers_provider.getBalance("0x5bd9dee999fe2c4e6efdbab2c395b4685b0c00d0").then((res) => console.log(res));
    // console.log(this.ethers_provider)

    const signer = this.ethers_provider.getSigner();

    const signedUNIcontract = UNIcontract.connect(signer);

    // const tx = signer.sendTransaction({
    //   to: "0x0000000000000000000000000000000000000000",
    //   value: ethers.utils.parseEther("1.0"),
    // });

    signer.getAddress().then((x) => {
      console.log(x);
      UNIcontract.balanceOf(x).then((res) => console.log(res));

      signedUNIcontract.approve(
        UNI,
        1000,
      );
    });
  },
  methods: {
    dataSumit() {
      //code here
    },
    editorInit: function () {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/html");
      require("brace/mode/javascript"); //language
      require("brace/mode/less");
      require("brace/theme/monokai");
      require("brace/snippets/javascript"); //snippet
    },
  },
};
</script>