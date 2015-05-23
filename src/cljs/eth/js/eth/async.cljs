(ns eth.js.eth.async
  (:require
    [cljs.core.async :as async]
    [eth.js.eth :as eth]))

(defn get-block
  [block-id tx-details?]
  (let [out (async/chan 1)]
    (eth/get-block block-id tx-details? 
                   (fn [error result]
                     (async/put! out [error result])))
    out))
