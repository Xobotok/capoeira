<template>
    <div class="loader">
        <div class="cssload-container">
            <div class="cssload-lt"></div>
            <div class="cssload-rt"></div>
            <div class="cssload-lb"></div>
            <div class="cssload-rb"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Loader',
    props: {

    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @background: #E5E5E5;
    @background_workspace: white;
    @elements: #0093d4;
    @main_text: #58525a;
    @light_text: #b2b3b4;
    @link_text: #8cacd0;
    .loader {
        display: flex;
        position: fixed;
        width: 100vw;
        height: calc(100vh - 72px);
        align-items: center;
        justify-content: center;
        top: 72px;
        left: 0;
        background-color: rgba(229, 229, 229, 0.47);
    }
    .cssload-container {
        width: 157px;
        margin: 128px auto;
        font-size: 0;
        position: relative;
        transform-origin: 50% 50%;
        -o-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation: cssload-clockwise 6.9s linear infinite;
        -o-animation: cssload-clockwise 6.9s linear infinite;
        -ms-animation: cssload-clockwise 6.9s linear infinite;
        -webkit-animation: cssload-clockwise 6.9s linear infinite;
        -moz-animation: cssload-clockwise 6.9s linear infinite;
    }
    .cssload-container:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 85px;
        height: 85px;
        border: 13px solid rgb(229,229,229);
        border-radius: 100%;
        -o-border-radius: 100%;
        -ms-border-radius: 100%;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    .cssload-container:after {
        position: absolute;
        content: '';
        z-index: -1;
        top: 0;
        right: 0;
        width: 85px;
        height: 85px;
        border: 13px solid rgb(229,229,229);
        border-radius: 100%;
        -o-border-radius: 100%;
        -ms-border-radius: 100%;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    .cssload-lt, .cssload-rt, .cssload-lb, .cssload-rb {
        position: relative;
        display: inline-block;
        overflow: hidden;
        width: 85px;
        height: 43px;
        opacity: 1;
    }
    .cssload-lt:before, .cssload-rt:before, .cssload-lb:before, .cssload-rb:before {
        position: absolute;
        content: '';
        width: 85px;
        height: 85px;
        border-top: 13px solid rgb(0,147,212);
        border-right: 13px solid transparent;
        border-bottom: 13px solid transparent;
        border-left: 13px solid transparent;
        border-radius: 100%;
        -o-border-radius: 100%;
        -ms-border-radius: 100%;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    .cssload-lt {
        margin-right: -13px;
        animation: cssload-lt 2.3s linear -2300ms infinite;
        -o-animation: cssload-lt 2.3s linear -2300ms infinite;
        -ms-animation: cssload-lt 2.3s linear -2300ms infinite;
        -webkit-animation: cssload-lt 2.3s linear -2300ms infinite;
        -moz-animation: cssload-lt 2.3s linear -2300ms infinite;
    }
    .cssload-lt:before {
        top: 0;
        left: 0;
        animation: cssload-not-clockwise 1.15s linear infinite;
        -o-animation: cssload-not-clockwise 1.15s linear infinite;
        -ms-animation: cssload-not-clockwise 1.15s linear infinite;
        -webkit-animation: cssload-not-clockwise 1.15s linear infinite;
        -moz-animation: cssload-not-clockwise 1.15s linear infinite;
    }

    .cssload-rt {
        animation: cssload-lt 2.3s linear -1150ms infinite;
        -o-animation: cssload-lt 2.3s linear -1150ms infinite;
        -ms-animation: cssload-lt 2.3s linear -1150ms infinite;
        -webkit-animation: cssload-lt 2.3s linear -1150ms infinite;
        -moz-animation: cssload-lt 2.3s linear -1150ms infinite;
    }
    .cssload-rt:before {
        top: 0;
        right: 0;
        animation: cssload-clockwise 1.15s linear infinite;
        -o-animation: cssload-clockwise 1.15s linear infinite;
        -ms-animation: cssload-clockwise 1.15s linear infinite;
        -webkit-animation: cssload-clockwise 1.15s linear infinite;
        -moz-animation: cssload-clockwise 1.15s linear infinite;
    }

    .cssload-lb {
        margin-right: -13px;
        animation: cssload-lt 2.3s linear -1725ms infinite;
        -o-animation: cssload-lt 2.3s linear -1725ms infinite;
        -ms-animation: cssload-lt 2.3s linear -1725ms infinite;
        -webkit-animation: cssload-lt 2.3s linear -1725ms infinite;
        -moz-animation: cssload-lt 2.3s linear -1725ms infinite;
    }
    .cssload-lb:before {
        bottom: 0;
        left: 0;
        animation: cssload-not-clockwise 1.15s linear infinite;
        -o-animation: cssload-not-clockwise 1.15s linear infinite;
        -ms-animation: cssload-not-clockwise 1.15s linear infinite;
        -webkit-animation: cssload-not-clockwise 1.15s linear infinite;
        -moz-animation: cssload-not-clockwise 1.15s linear infinite;
    }

    .cssload-rb {
        animation: cssload-lt 2.3s linear -575ms infinite;
        -o-animation: cssload-lt 2.3s linear -575ms infinite;
        -ms-animation: cssload-lt 2.3s linear -575ms infinite;
        -webkit-animation: cssload-lt 2.3s linear -575ms infinite;
        -moz-animation: cssload-lt 2.3s linear -575ms infinite;
    }
    .cssload-rb:before {
        bottom: 0;
        right: 0;
        animation: cssload-clockwise 1.15s linear infinite;
        -o-animation: cssload-clockwise 1.15s linear infinite;
        -ms-animation: cssload-clockwise 1.15s linear infinite;
        -webkit-animation: cssload-clockwise 1.15s linear infinite;
        -moz-animation: cssload-clockwise 1.15s linear infinite;
    }

    @keyframes cssload-clockwise {
        0% {
            transform: rotate(-45deg);
        }
        100% {
            transform: rotate(315deg);
        }
    }

    @-o-keyframes cssload-clockwise {
        0% {
            -o-transform: rotate(-45deg);
        }
        100% {
            -o-transform: rotate(315deg);
        }
    }

    @-ms-keyframes cssload-clockwise {
        0% {
            -ms-transform: rotate(-45deg);
        }
        100% {
            -ms-transform: rotate(315deg);
        }
    }

    @-webkit-keyframes cssload-clockwise {
        0% {
            -webkit-transform: rotate(-45deg);
        }
        100% {
            -webkit-transform: rotate(315deg);
        }
    }

    @-moz-keyframes cssload-clockwise {
        0% {
            -moz-transform: rotate(-45deg);
        }
        100% {
            -moz-transform: rotate(315deg);
        }
    }

    @keyframes cssload-not-clockwise {
        0% {
            transform: rotate(45deg);
        }
        100% {
            transform: rotate(-315deg);
        }
    }

    @-o-keyframes cssload-not-clockwise {
        0% {
            -o-transform: rotate(45deg);
        }
        100% {
            -o-transform: rotate(-315deg);
        }
    }

    @-ms-keyframes cssload-not-clockwise {
        0% {
            -ms-transform: rotate(45deg);
        }
        100% {
            -ms-transform: rotate(-315deg);
        }
    }

    @-webkit-keyframes cssload-not-clockwise {
        0% {
            -webkit-transform: rotate(45deg);
        }
        100% {
            -webkit-transform: rotate(-315deg);
        }
    }

    @-moz-keyframes cssload-not-clockwise {
        0% {
            -moz-transform: rotate(45deg);
        }
        100% {
            -moz-transform: rotate(-315deg);
        }
    }

    @keyframes cssload-lt {
        0% {
            opacity: 1;
        }
        25% {
            opacity: 1;
        }
        26% {
            opacity: 0;
        }
        75% {
            opacity: 0;
        }
        76% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }

    @-o-keyframes cssload-lt {
        0% {
            opacity: 1;
        }
        25% {
            opacity: 1;
        }
        26% {
            opacity: 0;
        }
        75% {
            opacity: 0;
        }
        76% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }

    @-ms-keyframes cssload-lt {
        0% {
            opacity: 1;
        }
        25% {
            opacity: 1;
        }
        26% {
            opacity: 0;
        }
        75% {
            opacity: 0;
        }
        76% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes cssload-lt {
        0% {
            opacity: 1;
        }
        25% {
            opacity: 1;
        }
        26% {
            opacity: 0;
        }
        75% {
            opacity: 0;
        }
        76% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }

    @-moz-keyframes cssload-lt {
        0% {
            opacity: 1;
        }
        25% {
            opacity: 1;
        }
        26% {
            opacity: 0;
        }
        75% {
            opacity: 0;
        }
        76% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }
</style>
