<template>
    <div>
        <AceEditor v-model="json" @init="editorInit" lang="javascript" theme="monokai" width="100%" height="200px" :options="{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            fontSize: 14,
            highlightActiveLine: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
            showPrintMargin: false,
            showGutter: true,
        }" :commands="[
            {
                name: 'save',
                bindKey: { win: 'Ctrl-s', mac: 'Command-s' },
                exec: dataSumit,
                readOnly: true,
            },
        ]" />
    </div>
</template>

<script>
import Card from "../base/Card.vue"
import AceEditor from 'vuejs-ace-editor';

export default {
    name: "BurnCard",
    components: { Card, AceEditor },
    data() {
        return {
            json: '{\n"kek": 1}'
        }
    },
    methods: {
        dataSumit() {
            //code here
        },
        editorInit: function() {
            require('brace/ext/language_tools') //language extension prerequsite...
            require('brace/mode/html')
            require('brace/mode/javascript') //language
            require('brace/mode/less')
            require('brace/theme/monokai')
            require('brace/snippets/javascript') //snippet
        }
    }
}
</script>

<style>
/* .ant-col-4, .ant-col-14 {
    width: auto !important;
} */
</style>