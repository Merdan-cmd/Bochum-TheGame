(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))f(C);new MutationObserver(C=>{for(const E of C)if(E.type==="childList")for(const d of E.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function N(C){const E={};return C.integrity&&(E.integrity=C.integrity),C.referrerpolicy&&(E.referrerPolicy=C.referrerpolicy),C.crossorigin==="use-credentials"?E.credentials="include":C.crossorigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function f(C){if(C.ep)return;C.ep=!0;const E=N(C);fetch(C.href,E)}})();const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABGCAYAAABc3M0+AAAACXBIWXMAAC4jAAAuIwF4pT92AAADiElEQVRoge1bP2sUQRx9Ew4JchHSpUlSCBK9cLtwhRIj2AZSXJ0iEJNSEMQudvkEia1iI4KNBBLIB/AMWAR2QyKHndikC+SuPByLZNbZ3ZmdPze3Nyu+5m53Z2fevH2/387NzBFKKVQghKgLWYBSSgAgDIPkXBTF2vdPqAqMirgL1IouEkLoz/P2yBpnwlBKCa++LqTkWcW9/kCroql6oQ5CMGH4TpjcL2yRVXb2bdWYkA2ynQiCJtHxPskGrC1xG+VlmG/sA1A/iVSLhBBqq7bIXsN2KBsH2aeRZBufs4oMylTpM0ZGfhjLsACO41Max6dSR7iLMg4ugxeQv3VTrZSVGnXAvxwJIZR/kbHOTLCL5dMzg4hjrewXEo9sejW1m1fZRncowuAkshauVtInrszu7945smp3KOUXrlbyxC3rsUEh+al6zXnacwktZlP1Ws6PLhQX1dfFUdKmCjnlfVY6CydMLy77qeNXB5vJ9w/rn4zKv36uH7xaAWuawsqCV3neFNYBy2Nmup46FllFt3xXh9AN/n3lfYH0Z2AVUYryP35dCM/fm50xquf9g2UAwMb3DoAhlJcRKhP/baOCqT10UWnlrcn//nzfJQ8AQHd32qj8ULYRNbbw4tJJPTqwI7+zZnWbCCbEd2/1AAAbN8fOR5UmZGwVZ6hRSgk/JyKb7e31B2hMtgEA5yMmpYtE+cWHh1o3nG/fHhkZU0wA6kn8uUGJE1I7a9pCSj0v+i1bpupsdYRHFMWpkWVCnlJK+B73+oOU/5nfy8DZ6sfUMY3fArier+TjM6e86JGRYGssXp9v7CeWZR0Arpd7wjAQ26Yx2UZjsj3WaZCs+iIUspsbrIIEW84IuYb3A7Mi8bwmr7JOzjZ8YPiGJOsEWxTIrMPKiOsEzzigtM2zp3fL4FEIme+99jxQ/NSV5F/Wd5yScQnvlWcQWacS5GXWSW9ZEfTO10wDcORFY3rfV8YrYRsZKks+CJqksuSjKK7W4gKfUMIwqBb57PbdSpBfPLyeocvu9svtq8zCh3QZBE3h1Eyh8mEY/M3/p+/UnWhuJo0sLy8BADqdY3FZjfrC9T0h6dQ2raqi0uSltskGx5ftR8rKnhzoN6xTH7BXeFWovM1e9nEgpbyINDv3ZlZvdMkClUerFeLkJMp9N0V2BXzkeb7VClOfLqHM8wmJpcfKgifHX7X/eeCivj9qPzAnoKmXGAAAAABJRU5ErkJggg==",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABGCAYAAABsUNwfAAAACXBIWXMAAC4jAAAuIwF4pT92AAADmklEQVRoge1aPWgUQRT+xgTzcwcaCSSBWAkaA2YXrpFEwULQRixFDGpCGhVNIYiQyk78aRI0TVQMUYhNLGMRLdRDu7sTJNpYGDARMULuTCLEtci9zd7N7O7M7sXcze0Hx+3O7Judt9/sNzNvH7MsC0HAGAtmKAHD6GLFZalUWtp+W0l7UyKk05lQD6w2bAcuHO8O2wSH0elkKPuyZCosAjEl+z51tLcEaR4APwQZY7Asi3vXRGCqQkEOyQy7jvaWFcdpvUTza/n/muKKwbEpGEYXkxEMJaZUHHJAxhknOIdUIeVUQGcwO7fAOeQzJEUO/cz/70qnM5ZpGr5yHwmFJP4A2F7C9uKqBhFT5QCX1UbBeyYl6UGFwgth5jDC4NgUgI21IglG9Q0/CYZWoD4P+WJ2boErU2FWS6bCOlVylkqBiKlKQeB5auTqGQDA5btPAtlfOnWUK/Nqq1i+88fCayOmRCDGRJhfzBacDz5/5dnWUP9JpevdoCVTWjq1qQva1qbCXcNk34nA19c+nZa+b/UxRfI5Op10Xcp7CcX/QrSdJ4hi28ReLLPKXX/zcb/UzT9/nReW793dKmVPeNR5CADQ9/ENAE2Z0tKpLY1RqA4zWVQfUySVqh/Yrp97GKJLQOeOcHtPLZnyDJERQ297TaVGp166x/hlWNiXyLnW9Uyk7GP6tGOaBgDNQ2SRU5UCLZ2yhUIk26oCIYMHc0sAgLp6PuLa2/w7UJskHiQcWjJVG1S26el42b3Yf54rMw83AwBmbo/wButVuPjhL1d1/4D/8ydp15KpyKlKgZZObcp+ypbtH8+4umN52Z5BXcnuR2LVM5GyAE2ZYgAsALDSY84oyE4AYMaA65K6/8ge10ZpYhVNprfe+TN07SAfzCGZ95J2mma0ZMr5Ti06jpWzTMoJWjKlpVOeq3SCKI9idWU918FrtU3S7oR5+oZvpxKv73BlxevB1PgV7hpmDADQlClbKETxcplU6vff+SBJZqkxf9TA1X0av+fbqUmBHWDfh/rJ9Y180JspH6gm+G4pKi7fj2CeHbZfl42PbsMANB1+tqTTVlgEkWBQtklNDZ//3tDQyJURstlcKDsUZWGKoDdTInixB2AZABJNOU44aEJOfssWVyEejzEAyGZz3I0TTbkCeyccbbkyFcXSXfAr/ys7RExVCqTy0n0E44ugrB4A4vFYm5vR8jK/1V9bc+9Md1ucAWLxqYqMl3+LQBLHGaMKfwAAAABJRU5ErkJggg==",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACgAAAABOCAIAAABjFNjdAAAACXBIWXMAAC4jAAAuIwF4pT92AAAD1UlEQVR4nO3dvYrqUBiG0R2zSWUK7ay9EW/IS/IWLVIISURPIQRhhsNhEMJ5Z63K/PKVGx+SNJfLpQAAAAAAAADw/9usPQAAAAAAAAAAnyEAAwAAAAAAAIQQgAEAAAAAAABCCMAAAAAAAAAAIQRgAAAAAAAAgBACMAAAAAAAAEAIARgAAAAAAAAghAAMAAAAAAAAEEIABgAAAAAAAAghAAMAAAAAAACEEIABAAAAAAAAQgjAAAAAAAAAACHq4XBYewYAAIBfZ5qmWutmsxnHsW3b2+02TdPj8Xg+n6WUpmn2+32tde0xAQBizfNcShmGYZ7n1xqslNI0TSml67q+78dx3G63a44IAD/SnE6ntWcAAAD4mNefd0tG/Xpo2fmXzW8v/3bPP4709ebLDZfN5bSXtm2Xo+8/fjAAAADv3leM9/t9GIbr9frqwX3f11p3u13XdcvSa7PxKk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjVmvP5vPYMAAAAAAAAAHyAb9cDAAAAAAAAhBCAAQAAAAAAAEIIwAAAAAAAAAAhBGAAAAAAAACAEAIwAAAAAAAAQAgBGAAAAAAAACCEAAwAAAAAAAAQQgAGAAAAAAAACCEAAwAAAAAAAIQQgAEAAAAAAABCCMAAAAAAAAAAIQRgAAAAAAAAgBACMAAAAAAAAEAIARgAAAAAAAAghAAMAAAAAAAAEEIABgAAAAAAAAghAAMAAAAAAACEEIABAAAAAAAAQgjAAAAAAAAAACFq3/drzwAAAAAAAADAB3gCGAAAAAAAACCEAAwAAAAAAAAQQgAGAAAAAAAACCEAAwAAAAAAAIQQgAEAAAAAAABCCMAAAAAAAAAAIQRgAAAAAAAAgBACMAAAAAAAAEAIARgAAAAAAAAghAAMAAAAAAAAEEIABgAAAAAAAAghAAMAAAAAAACEEIABAAAAAAAAQgjAAAAAAAAAACEEYAAAAAAAAIAQAjAAAAAAAABACAEYAAAAAAAAIIQADAAAAAAAABBCAAYAAAAAAAAIIQADAAAAAAAAhBCAAQAAAAAAAEIIwAAAAAAAAAAhBGAAAAAAAACAEAIwAAAAAAAAQAgBGAAAAAAAACCEAAwAAAAAAAAQQgAGAAAAAAAACCEAAwAAAAAAAIQQgAEAAAAAAABCCMAAAAAAAAAAIQRgAAAAAAAAgBACMAAAAAAAAEAIARgAAAAAAAAghAAMAAAAAAAAEEIABgAAAAAAAAhRj8fj2jMAAAAAAAAA8AGeAAYAAAAAAAAIIQADAAAAAAAAhBCAAQAAAAAAAEL8Adb8YlPNgSJbAAAAAElFTkSuQmCC",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAABQCAIAAAD0oSwPAAAACXBIWXMAAC4jAAAuIwF4pT92AAABDElEQVR4nO3YMRGEUBAFwc8VKQKIMYIh7GEJGydjJ+hW8IKpDXZ733fBtP37vukNsH7TA2AtIRIhRBKESIIQSRAiCUIkQYgkCJEEIZIgRBKESIIQSdjP85zeAGu773t6AwAALdvzPNMbwPuGBiGSIEQShEiCEEkQIglCJEGIJAiRBCGSIEQShEiCEEkQIglCJEGIJAiRBCGSIEQS9uM4pjeAi0iDEEkQIglCJEGIJAiRBCGSIEQShEiCEEkQIglCJEGIJAiRBCGSIEQShEiCEEkQIglCJEGIJAiRBCGSIEQShEiCEEkQIglCJEGIJAiRBCGSIEQShEiCEEkQIgn7dV3TG8BFpEGIJAiRhD/VfwhZFME1DQAAAABJRU5ErkJggg==",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAABQCAIAAABNtapHAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA9klEQVR4nO3WQQ2EQBBFwWUzVwRwxgiGsIclbKyBuc/LpkrBT1466e15ng89433f1RuY+K4ewJwwUcJECRMlTJQwUcJECRMlTJQwUcJECRMlTNQ4jmP1Bia267pWbwDgP233fa/ewIR3OUqYKGGihIkSJkqYKGGihIkSJkqYKGGihIkSJkqYKGGihIkSJkqYKGGixr7vqzcw4WKihIkSJkqYKGGihIkSJkqYKGGihIkSJkqYKGGihIkSJkqYKGGihIkSJkqYKGGihIkSJkqYKGGihIkSJkqYKGGihIkSJkqYKGGihIkSJmqc57l6AxMuJkqYKGGifgScCFllxcJbAAAAAElFTkSuQmCC",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAAAiCAYAAAC9f3eoAAAACXBIWXMAAC4jAAAuIwF4pT92AAAERUlEQVR4nO3du0scQQAG8G9ODy6cRSCFYJMqRURJZXNKHpcDRQQtgtgEFC1S2EZIGVIEtLVIYYhgkWClEESJORJRIVgFxD8gBMEinYFAyG2Kc9a92Z2b3b19nX6/Ju5mH3N77s3nzOycsCwLRFklhAAAZOX3VAihFkQA2SlfVHJpF4CIsqcz7QIQNSNr4ser3jXy52mRZHFstXIZAJCrVi0AeLxqeRYkrfK1iomBiFyYGKgtyJpXlxzSYieHmZwFAOV3tfaMCAomBiJyYWJISQ172ar62sSn6cblWuuHFACQw/2WDhJ3cvDoDTHuAoTvLWFiICKXzCcG1qwUMwsAatiLJDnohG0bqV4mkFD7yXEgkinJyLYcJgYiculkjUzXnKxBE0kOJrKml4ImBdN+VZ9tIEwMROTSCeUTM2p/f//BZtdw023Gz3eQLxYAACdvP+Jkbqnh/3tXnqN3dszXMZ3H8rtdEKbyOc/pXO/cL8i5nccbP9/B/txrAMDQyouG9fliIdLrEuR9C3o83fUK+55EJJLkIGtq+2/8mWD3lykhVGdy6nk8lz3K41k+XXJgYiAiF2evRCzJIV8s4In1FYC/2qF3dgx3piq+axG/tUxUtVGQ8p3MLeHm3dv2z0nSlUv3Hsj1m13D9vog75vpvE7yuvSU+kO9tpiZkkN9+eIZCV0N71EzR1I49TimZdN2apuGmKn/y8RARC6d8pOwhj25LtY2h+tkYHsRP7e/2T8fjSykXCI9Z0JIwuHgPMbPdxI7n4npPpDr/ynXqEPU69b1Y83tElFSiIuaJGRbBBMDEbnYbQztmhzU1nDd37h+t4vaj1drAIDu7cXYz+Wke735YgHj5zt2e4Kq1evi5zqPnm1gq3sCm13DGD3bCH2uODjuA/l779lq3yEeWIA+Kbw5yvRtY8TEQEQufp6VyHRySLpXIoieoXu4NfXQ/jmMfLGA0sEyDgfncbr/Hb8+fAEAnE6PAgBKB8uer6vZ6/VqT/DqlQjDz7754g07tWx1T4Q6T1xMScFkss/1bELD8u5aJVS54lJ5ugugYfzDRS8MEZHCT2LIZFK4jo5GFlA6WAZQb9UPIysjDZ1JKAtMSUE3AlJNCJbVOPejOo9CJWQvxbOBYAHGbxuHY0SkcC4zMRCRS7PEkEpSUJ9F2Owadj0r4ZR0b0PQ8j16/xJAvaYOq6fUf9lWcTFaUF1WZblXQuop9dtlSVGopADDDEmOeRAEoB9pqCO3jzopqM9S1MplAQBqywcTAxG5CPUTj/Mz0DUTNCnUdxLNa3J5X8ntTM9KyGQw2Seajo/QUds6dDiDExGFZrcxMCkk7kp8/8BV43f+Bb+zL5u+SUtqNSmsHzf2hrQ68pKJgYhc2mHOR9asFLu053iMKilEhYmBiFxcvRImjqcvAST/Sauev92lVVNRNoT4hikAniMs5foISsXEQEQe/gMrKh1TZ5XYTAAAAABJRU5ErkJggg==",J="/assets/Hintergrund-720be332.png",H="/assets/Dach-mit-Schild-b79b97ff.png",P="data:image/png;base64,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",O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAABrCAYAAAA8VXH0AAAACXBIWXMAAC4jAAAuIwF4pT92AAAD1ElEQVR4nO2aS2gTQRjH/7uJtVWDqD1IqZUiRVDw5MGDBy9pEZ+3Bh+HRmmx0INYCo2LF0PowZOCSJD2Wj2qFUsPHrxJPRQFQTxIRQr1BdpamtodD3HqTrKb7MzOxEyYHwT28e3M98s8dthdixACL+l0mj2gEePj4xbdtr0ndJYC2Pxtv4M6Qz0sQkjDSHmJzc/PN5wUUDLGGgkjphtGTDcaVize1dX1v3NQQlzkolR+emN7sr8Hqfw0Jvt7mPN0vzTWr4wo5QTBLVZaeaXjQYkGlcFbZyW4xxhNTDVeGZE6hSYPv4qCKk/lpzd+YaCxpS3EKyc8K4aVm+zv2fiFLTdIgkdOaIx5KxKpPOgP8IspjQ37B1m5XM6s7nWCqys6jqMqDy6y2WzVmNBijuOA9D6OlBAArN64ErmM5oNOVbmG7YpGTDeEFsEU1zkhcBFf+JrdwV8HIooBgJWbiVpEKArOJa74hu2KNRcjmWRN6jEtFoZqrUHPL4+cjFROGKS3WJiktsRXI10fBiVdUTQ5meNPutiphzcBAMf3veS6TvakIl3syfsjAICnvddlF82Fkq5Ib9ofh86Fiv80lGKuk4HS6b498ZnZX3f9q2tLfJVed03vYzGbc6EYgbq5Qctec9aNmGyUie2/N6Gq6FAoE3v3rV1V0aFQ3hV/DJ+JdF4UZWJ0JZFo+lUxrtp5UZSvFels9+LiVWb/+YVhZr/ul1R+UgBwdM8bJu5Yx1xZXF0vgivRdvsBgNo8J5Eu5k16ZaT4FIu2xMLSTiaWHqdxm8aeSctD6SK4OV5gu6ZV/mKHZJJojhdg5Wbw241JyyHy47cg/MaNO9oN17Vg28Q3ViY1G2M0edsmeL3YqXyc1XTyiI8V30weup9XX5fsAoOmbO/x0hgVzxqlih2euFt2bLZvkDk32zfIbAddFxWpYq8Wyj9fsnIzIJkkc867rWqs1WyMuaPdFfdlE0nMzk6FHh+WRbCtaYXZDwvvmxZAQotRuUqCtLv9HD4N4N9kUa0bvh1IC0kBksaYnZ0CABAnOGE61gBgqdCCxK1HgeXNXR7Agd3LINgsnJPUyaOaIJULkvp+7Sy2tuwAYEeSAhQtqajgh6Hz2Lt9kRH0a02SSf59JbtLWg7K1ooA0Hmn+ECHtiDAvlOOkS9Yt1qxBrH3zJVQKkahLQgUX8hTuXWrVV2dykoOQPQrAF7MA1Pd4PpeUaev38yHmLphxHTDiOmGEdMNI6YbRkw3jJhuGDHdMGK6YcR0w4jphhHTDSOmG0ZMN4yYbhgx3TBiumHEdMOI6YYR040/KdpxFD5ZYjcAAAAASUVORK5CYII=",b="/assets/Zug-774893d9.png",g="data:image/png;base64,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AAAAABAiAAYAAAAAAAAAAAAAAAAAgBABMAAAAAAAAAAAAAAAAAAAhAiAAQAAAAAAAAAAAAAAAAAgRAAMAAAAAAAAAAAAAAAAAAAhAmAAAAAAAAAAAAAAAAAAAAgRAAMAAAAAAAAAAAAAAAAAQIgAGAAAAAAAAAAAAAAAAAAAQgTAAAAAAAAAAAAAAAAAAAAQIgAGAAAAAAAAAAAAAAAAAIAQATAAAAAAAAAAAAAAAAAAAIQIgAEAAAAAAAAAAAAAAAAAIEQADAAAAAAAAAAAAAAAAAAAIQJgAAAAAAAAAAAAAAAAAAAIEQADAAAAAAAAAAAAAAAAAECIABgAAAAAAAAAAAAAAAAAAEIEwAAAAAAAAAAAAAAAAAAAECIABgAAAAAAAAAAAAAAAACAEAEwAAAAAAAAAAAAAAAAAACECIABAAAAAAAAAAAAAAAAACBEAAwAAAAAAAAAAAAAAAAAACECYAAAAAAAAAAAAAAAAAAACBEAAwAAAAAAAAAAAAAAAABAiAAYAAAAAAAAAAAAAAAAAABCBMAAAAAAAAAAAAAAAAAAABAiAAYAAAAAAAAAAAAAAAAAgBABMAAAAAAAAAAAAAAAAAAAhAiAAQAAAAAAAAAAAAAAAAAgRAAMAAAAAAAAAAAAAAAAAAAhAmAAAAAAAAAAAAAAAAAAAAgRAAMAAAAAAAAAAAAAAAAAQIgAGAAAAAAAAAAAAAAAAAAAQgTAAAAAAAAAAAAAAAAAAAAQIgAGAAAAAAAAAAAAAAAAAIAQATAAAAAAAAAAAAAAAAAAAIQIgAEAAAAAAAAAAAAAAAAAIEQADAAAAAAAAAAAAAAAAAAAIQJgAAAAAAAAAAAAAAAAAAAI+Qa0aheOIiJHbwAAAABJRU5ErkJggg==",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABICAYAAAC5mNZRAAAACXBIWXMAAC4jAAAuIwF4pT92AAACp0lEQVRogWNkIA/8J1MfJYCRGEVMtHYFvcGohwY7ICpdMqDlmWUODtR3CQEQdeAAMhenu4ddDA07D+FLcvBkhi+JCXNwEGWRm5wcgjNzJlF6GNLT4UzGWbOQZUaT3JAFLORo0hAUpLY7qAaGXQwNOw8RVco9jY4myjApbm7cksSWbDgAIyOKU0dLuSELhp2HiMpDQwkMuxgadh4iqqXQ7oG7OPZPqMMqzvPiJgpfrmAenH1tRSfJetDAaLE9ZAFRpdz1lV0oEgdWNMPZqVkdVHcUDHyX0ISzeXWdkKVGk9yQBUSVcqpCqKXcE1GyulF0AcMuhkY9NNgBvswALxpZXLNRGqp/dk+lzNZnN7CLS2lQZi7DMIyhYechsgbrkQHFyQ8PYHHNRuaOTngNC0BU4zTKeQaKhLqcE4ZiQqBunio2oxmiXRCD8Ev3pKE6jhElvEeT3LAA6BUr1mRGThJDB01Jt7GKL92TTlANKWDYxdCohwY7YGEgI9/oWPDC2WtXbSRKDzJ4/vYanM3HZQNnl0QcQVG3duZzODs4XRK5tTI6pjBkAUqxjSvJICcxBgbykhkykBTWgrM/fXsJZ48W21jAsPPQgIxHEVvKIQPkEnjZ3gycJd6wi6Fh5yGUJHfz0T6sim4+oq6lo6UcCWDUQ4MdoOQhA82DcLaStChOTVXzd8DZZx73wdlyyIv88IBV5Qj2wRmf4OzDj/lQ1C08eA/Orgh3hLOX7cVt9rCLoWHnIUYGpP7QgenVcAkbFSmcmqJLEXOsXGzMtHEZAwODgaEBnJ0d4gVn4xtRHXYxNOw8RHHjVJyPnWQ99998g7MVRbiI0kPswP2wi6Fh5yH0qBvMa+RGB+uHBRh2HiJ2jhUFhIaGEsxrq1evpsZ6VpLdN+xiaNh5CADNy4cMIAtYMQAAAABJRU5ErkJggg==",n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABICAYAAAC5mNZRAAAACXBIWXMAAC4jAAAuIwF4pT92AAACxklEQVRogWNkIB78J0EttQAjqRqYaOGKgQSjHhrsgFAaheebZQ4OtHUJFhB14AC6EME8NexiaNh5iOgk9z8tDSE6cyZxpqenw5m7Hj0iSsvbHz9wyqElQaxuH3YxNOw8xEIvi0Q5OUlWd+P9e5LtGXYxNOw8RHwp95/CtilSiYcOnn39SpQR0kuXInNHS7khCYadhxgZBqbjRg0wmoeGJCC62EYGjyYkofC/SKhj1awVUU6yno0LmnA6pnIHSvE+muSGJCC6cfr58j44m/PFdaL0/Nk9lWQHCXAiwtghohZFrnJHGUH9wy6Ghp2H6NYfIhaoiCKcpCrETbL+YRdDox4a7IDolgLeYvvZDey6pTTIdRcDAwMDA4trNrrQ6MjpkAekTCjBkx85LQBiAZZkhgxGk9yQB2Qluf///6FIRLvMgrOX7kEa1EcyvinpNsmOu/loHwp/2d4MZO5of2hIArKSXGPiLRSJunmqcDY5SYtYgJwEcSW/YRdDox4a7IDoxunamc/hgldOfEZR1LPCBs6OdkUU4ZLCWkQ5AjlvBIf547QHlx7k/DTsYmjYeYgqYwqfvr2Es8kpttXlnODstas2wtnIyY+BATUJIutBBsMuhoadh7AlOXjJFuU8gyhD+LjE4WxySjlqgmEXQ8POQ4OilMMFkEs8YsGwi6FRDw12gDcPOZidhrNLO7vgbCUlJRR1B2d8grNzo/jg7LBO4hzxCMfiwLZED5x67j19DWcv24sQH3YxNOw8hDfJJTkZwdnf372Asy+cv4CibuF8ZN5TOEuWSEfICiDY3379hbMDTLBP/TMwMDAcEeDFKj7sYmjYeQhbkoN3y1lcs+EN1Ynp3nAF4nzsOA28/+YbnK0owkWyg5D1kwOGXQwNOw+RNXI6CMHoyOmQAcPOQyRv2oMCYvMTTvNDQ0MJmrF69erRTYXDzkMA0VSrMWAsnMAAAAAASUVORK5CYII=",Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAFOCAYAAAC10CIhAAAACXBIWXMAAC4jAAAuIwF4pT92AAAFBUlEQVR4nO3dW3LaSABAUdnlFWW2ZFYFe9V8zODBHrAx6MXhnqp8pJJCrb7qxshK/DLkKu/v7+NUr3U4HF6meq2jcRyH16lfNOuZ/Ao5NdXVPMeVfK0pV+Q5U53bOI7zxJxjAtYIOnfIoynOrW0WM9nVvtRVPAzzrtIlz+Ore87r7m12zRP/6paJ2NL4j24N2jaLuXllbvGq3oLTlXXvHP1mlf56my3g946TP/U8XRP1V9tsIbfv7Zq/dE/Ic1eVdGEs8fn3dL6+O96PA5n7Ls6jhl3zfM4du69mMRdX5hq35B5llW5llzkdx8WvZte8ubzVoN+NeRz/GfJut1t87Mdxtc1iJvuA+1tTfRW4xme6ucdwi/1+//Ky9kC2EPXeMaw9h0dts5Crbhqo5vzAv9/v53rpD7vd7tPvz8accyBfByBaIuTxOKfz+b9tdu6BLHWiz6j3TMjrmk++rXnsKW3lPF6H4fNgnuE9bQ5bmMOz2+ycgzm+9lau5rksEfT0GPv9/uUjpj65S1hyDk9DHo/7aWXOvVU8w6pcYrs9F3IYzmyzcw3mGUIu4VLIYbjwnjl10GcL+XX+ploU34Uchh8eGzm9gXzLh/2fDj6lW252b3FM17j02MgizwAt/dDTtbY6ru9cGvM4jj/faD8cDnd9m+xZttZLljz/q75r8uxBHgVzb/a3F5x4gTIxU0xKMSHFhBQTUkxIMSHFhBQTUkxIMSHFhBQTUkxIMSHFhBQTUkxIMSHFhBQTUkxIMSHFhHAPAg/D9/++Q3z4eRj6jxA5xYQUE1JMSDEhxYQUE1JMSDEhxYQUE1JMSDEhDx/z+KOb8uAxv4Z89rAPHfPo1ohafCLmMPwX5qdA4zh+/Lrm7z8SJmaKOQyDszqLCSnmv4TV+ZA/pU+Y+Dm0Mk88+kVSTEgxIcWEvD36+8TUHnk+WpmQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCeFi7na78Z4/f2RczGdWTAgV89otVN1qqZjPrpiQYkKKCSkmpJiQYkKKCSkmpJiQYkKKCSkmpJiQt7UHMKW//vxZewir+htA+l5ZN+jPHAAAAABJRU5ErkJggg==",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACACAYAAABnVNkYAAAACXBIWXMAAC4jAAAuIwF4pT92AAAKgElEQVR4nO3dX0xb1x0H8K+NMTYYw5iTkhRSnEAYWYeyeM0idV6kSR0PEdIqrayKmESVqMqQ6BSp0cTSPGUqmjIJpZHIVCVKHqJsSyptEoq0lKeUPWRMJCtdYSTu+JOEEHCQMfgv//Zg7sXXvv4Dwdcn+Pt5wteOfRx/fX7nXO456ACsgEgABgDo6OjIdjsox7W3t0Of7UYQSQzRN2pqarLVDspRDx8+lH82xN7566GTmjaGctf5uk7FbZZpEgbDSMJgGEkYDCMJg2EkYTCMJAyGkYTBMJIwGEYSBsNIwmAYSRgMIwmDYSRhMIwkDIaRhMEwkjAYRhIGw0jCYBhJGAwjCYNhJGEwjCQMhpGEwTCSMBhGEkbcjhKZ1vbVsurxC9/j9yLXaZqAREFMdR/lBs17xmjPZhfkn18pyc9iS0gErI0kDIaRhJHVMp1pR0YDaL7sjjveduZVuI3afQ9b+zxwds/FHe9/qwh/+HGZ4tjHf3sGe38Y506W415Zbg1dNO0Zk82YMzmbHnEY0dtYjN7GYgDA6c+eZey10m3HiMMIR48PLQNexWMe7Dajt7EY45a8rLQxm7Z0zygJFOrRdbAUtvAynN1zMM1nZ0/9B7vNuFpvBQC0DHhh7w/HPUa6PxflRBglbqMef2zdjhNdUzjz+TTO/nQbgPgyevudEkUo1Mq9Woldj8Kg8lSWLbyMC2efyLfVynT1/CLO/v6p4thfm8two7ZIfg+TdQY8rDbL72eyzoCTR3dsuJ1a2tJhnC+IlP6Aaa3kzRXEDwfGthcAjZGfKyZC2Pu/AKp3F8Jlifz31I0H4KnMw1f7C5X/Jk1+U+Q1KydDaA165NfpbSyWQ+826tHbWIwaVwDlQ4txz3FgZgGnOicV7ahxBfD2tRm4Thoxtr0AhW8tY89/g6iYCGHQaYLZv4xvTS3hwMzCSzH+3NJhtIQivY85uCQf2+GN/6BvVZmBKjOAtV7yQF0IrloDqucX4ejxYbLOgK6DpRtqh9QL7usNAgjKx2diAtJ1sBSdrkDS5wpadHI7Pp4IKd8DAEePD6WPlnDtmA3bvAto6J9F/eMAw5htaj3jU2v8W75y7jFMXvVxpMtiwLVjNjRfduNPZx7Jxzcy240u/y0DXjTcnEVLqUExJAgURtrsNeoU//aXf48ME8qHFhXtUDPoNK2G0/xSjUG3dBjVesbikPqvHaWZdsVECPb+MHxR5XzYli/fDwBv3JnfUHv8BenPkK1h5Zfjy9eLUD40K48Jo0kzb7Uv38tkS4cxli28jBNdU/BU5smTl87rT2HyruBudRHuleWjtc8De38YRVGhdVkMcEWV6Ct35nGqc3Ld5ysLQ2tfitgJjMTsVz8+UGFGA2YBIOFwQe3Lp0Y6l/mik7DNplkYpQsh/FEfSLFp7YNs+sfa+OfGj9KfHKTD7F9Ga58HABC06vCr93fK9335ehFKn3hxyOXDIURCMllnQO2YHza7GW6jHk3DPtiifo8eLNHjX4cL133iPNkE5sDMAg65fPJjf/KfOdRHlfB7ZfloO/MqTn/2TH4vAPD5PgtcFgOOjAZQNx4Zb5a5F9Ey4E1YoqWhgN8k1i/gcqJntPeH5XN6QatyLHa13orDt73yqZBBpwmBQj329Qax6wdLcJfpUTvmX518rLn786J1tyPZBKb+cUBxesnR44OnMk8RqNLwMsqHFlE+tPY4d0k+XLUGvDYVgqMnEubyoUWUPkkcRqn3TdQ7Z4sOwIr0hyxramoy9hey1HrGWHOr/zmb3TNSvIufTuCb75iyWqbP13XKf66tvb09sz3jRq9RzGTJJqBp2IegRYehXebUD9aQWIMG0sT+ocjZAOncpChyYsxISr/92SvZboIqzcN4Kc+e8L7jphEAa2NHyi2ahvGTxV0o2FaCC9+Pn4m23ffh0rQdx5dGtGwSCUSzMEpBlHz3d6Pyz19/VAUAKNhWgkvTdvwC32jVLBJIViYwbfd9SW//pWiPls0hQWgSxtheMbZMR9+OfhzlFp7aIWFkrUxL48SvP6qKK9OUm7J2nrHtvg84sg1gEGkVyzQJQ/Mw9ndcR3/HddWfKbdlpUw72o/K4XO0H9X0tQ8/DeFE1xQGnSb5AttMW88i/nSfR6390asYg1Yd3jtV8QKtTuzDL2bg6PHh2jHbpv5+W/MwSuGLDaFWoVRbHaiVEYcRj3dGrkKqmIhcfxi7BiYZaQWgdN1iLGl5xEaXRaQrUxflah7GVOU406FMtAZGC+ks4k9GXgEI9TC6LAZ49lvh7J6Lu4h4M2Xqotys9YzRZbq/43pGQyiVlaBVh6vN8aVZxEX8icpsqkVXbqMeQasOwRL13qtp2Ie3r80ojp35zQ64LIaUGwHE/j80X3ajGYCnMk+xlGOjsnZqJzp8mQxi07AP5uASehuL4TfpYZ8OxT1GpEX8Emf3XNJ1LBshLY+NHi68cWcepy9O4r1TFSk3ApCGAdIKykGnCc9L8zetbG/56xlrx/zYObqAs+9HesSLn07EPUakRfwA5D2Bfnh3Pi6MqVYA2sLLq2vAE5fSxzsL5Ne6EjW+TLURwNV6K1wHS/HhFzOwI4x7ey0v5wQmND2b1u+dQ9Ozm/aaR0YD2NcbxLmT5fKxPzd+Gye6phSPE2ERv3Q7lY2WaVt4WX5+Z/ecYliiNr5MthHASz2B+cAwDgD4ZHpXysceXxrZtItrh235GHEY05q0iLCIP7p8OrvnELQknoSkWhttmlW+Z7dRjxGHEfb+sOJ1AGW40tkIYEtMYD4wjCddHbjZXBYDAoV6vNv9HHdWB9jvdj9XPEaERfxHRgNouDmLQacp5dZ9lhRfLKlMq/V2D3abYe8PK8p0oudPFfZUpJ5+PZObLT9mvLfXAmAerX0e+E16/POQBQ2P1sqhCIv4q+cXMeIwKjYbGHSasHN0AU3DPtyojVxi1zLghc0T2biqzL2I1j6PvIgfgNxOKYitfR6MbS+Qx3VX662YtubjzX97FRsBSMFMdyOAoV1m7KkM4sCDebw2FYLfpE840UrWu8fa8mG8VWVG3XhAPvcWe2pHhEX8LosBD3ab0XBzVj73ePudEuzrDaJ2zA+shvHwba88tpUW80uL+AHEtdPZPYfCt5YVk4yi0LJiUwNgbVeKdDcCuFVlxpvbvfL7id1sINp6NmbN6CJ+tXXT6ZTp6DEj101vXbGL+HnVDgmDYSRhaD5mjC7B0buQca00sWckYWS0Z4z+2y5qk5lEvSEnLbmJPSMJg2EkYWg2gVkr2SzBpI49IwmDYSRhMIwkDIaRhMEwkjAYRhIGw0jCYBhJGAwjCYNhJGEwjCQMhpGEwTCSMBhGEgbDSMJgGEkYDCMJg2EkYTCMJAyGkYTBMJIwGEYSBsNIwmAYSRhxi/jP13Vmox1EyjBKu4gSZQPLNAlDByD9HcCTkPYFj9be3r4ZT02CUPuMgc37nA0rKysv/Oc3dTpdwkBvxvNT9iX7jIHN+ZxZpkkYDCMJg2EkYTCMJAyGkYTBMJIwGEYSBsNIwmAYSRgMIwmDYSRhMIwkDIaRhMEwkjAYRhIGw0jCYBhJGAwjCYNhJGH8H3Q3sCvn4d6uAAAAAElFTkSuQmCC",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAxCAYAAAA8wULMAAAACXBIWXMAAC4jAAAuIwF4pT92AAABsElEQVRIid1WMUvDQBh90UAKRTplUkqLo5N08y+Iq4XOnSztoiCBjmJ1cKnEqXOhf8StdOookdJFMgWpGLTWodxxufvumkqx1QeB7+6+e3nfvctdrNlsBhm35T21E8Blb2yx2PHzvH8rLYFpTCGR8RJ98AcAakdOQkUqkjRYD4n/GC8mER1IO2aLjYvxNQDA1ZDIC8pgLdonzBUA8E8criSujXj/H3Zns0kS7jBX3uIpmfz6/sVj0anfL2cnQ6dbN6e7ym7TlQMkS/qREh1WQmJTnZ3tonZCNRMASJalkLQ/83DcHO4PswpBfTBBJyyiOg30ShgBw8HVM4+HzQIAwHFz6IRFlPHEx7RrUh9MjO1edl8lkVXI5YhtMc+oZBkYy2HrMGwWlHJEkBaLRDh2AQOBUckyIEn6rS76rS4ZL6Wk5FX4pJJXMSrhX7Fs8SLEYYTyZL7hyIXVyRZViiDLKXmVRCKL5X4Go8UUEYXVWxyHUapJch4vp2HPL+h2SN/8IqrTwHwoNeyR8aCmsDkH9T8jIXesaJ94/1JX6OqUhHdn/D/DPX9QLnfd29f7f6LDN/B8qEktyuyUAAAAAElFTkSuQmCC",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAGqCAYAAADk/A+CAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFaADAAQAAAABAAABqgAAAABR0F5uAAAAtklEQVR4Ae3QMQEAAADCoPVPbQo/iEBhwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwICB18AAjXIAAXgGRNEAAAAASUVORK5CYII=",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABEwAAABQCAYAAAADWuBJAAAACXBIWXMAAC4jAAAuIwF4pT92AAACgElEQVR4nO3cwUkDURhG0T8yuAu6sAAhK8Ei0lBKSi2mEQuwBhe6UZALLuOMcA4Mw6zet748Znc+n18GAIAtuZ+Zx5m5m5n3mXmdmbcrnPM8Mw8/vi9XOAMA/qVlZo5rjwAA4Fe3M/P09Vzb8Q/OAIB/4WbtAQAAAABbI5gAAAAAhGACAAAAEIIJAAAAQAgmAAAAACGYAAAAAIRgAgAAABCCCQAAAEAIJgAAAAAhmAAAAACEYAIAAAAQggkAAABACCYAAAAAsczMZe0RAAAAAFuym5mXtUcAAAAAbMDu+72bmY81lwAAAABsjX+YAAAAAIRgAgAAABDL6XRaewMAAADAprhhAgAAABCCCQAAAEAIJgAAAAAhmAAAAACEYAIAAAAQggkAAABACCYAAAAAIZgAAAAAhGACAAAAEIIJAAAAQAgmAAAAACGYAAAAAIRgAgAAABCCCQAAAEAIJgAAAAAhmAAAAACEYAIAAAAQggkAAABACCYAAAAAsez3+7U3AAAAAGyKGyYAAAAAIZgAAAAAhGACAAAAEIIJAAAAQAgmAAAAACGYAAAAAIRgAgAAABCCCQAAAEAIJgAAAAAhmAAAAACEYAIAAAAQggkAAABACCYAAAAAIZgAAAAAhGACAAAAEIIJAAAAQAgmAAAAACGYAAAAAIRgAgAAABCCCQAAAEAIJgAAAAAhmAAAAACEYAIAAAAQggkAAABACCYAAAAAIZgAAAAAhGACAAAAEIIJAAAAQAgmAAAAACGYAAAAAIRgAgAAABCCCQAAAEAIJgAAAAAhmAAAAACEYAIAAAAQy+FwWHsDAAAAwKa4YQIAAAAQggkAAABACCYAAAAA8QmcZAxtOSOoSwAAAABJRU5ErkJggg==",v="data:image/png;base64,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",U="/assets/RRX-fährt-cb295435.png",m=document.querySelector("canvas"),D=m.getContext("2d");let G=new Audio("./assets/sounds/jump.mp3");m.width=1280;m.height=720;const I={right:{pressed:!1},left:{pressed:!1}};function A(e){const t=new Image;return t.src=e,t}let Y=0,X=document.querySelector(".punkte"),i=new Player({image:A(x)}),k=0,w=[new Item({x:1390,y:390,image:A(o)}),new Item({x:2250,y:150,image:A(o)}),new Item({x:4050,y:475,image:A(o)}),new Item({x:4250,y:150,image:A(o)}),new Item({x:4800,y:355,image:A(o)}),new Item({x:5990,y:475,image:A(o)}),new Item({x:7290,y:150,image:A(o)})],r=[new Enemy({x:900,y:476,image:A(n),velocity:-5}),new Enemy({x:900,y:248,image:A(n),velocity:-2}),new Enemy({x:1500,y:476,image:A(l),velocity:2}),new Enemy({x:1200,y:476,image:A(n),velocity:-1}),new Enemy({x:3e3,y:476,image:A(n),velocity:-3}),new Enemy({x:3800,y:476,image:A(l),velocity:2}),new Enemy({x:4500,y:476,image:A(l),velocity:2}),new Enemy({x:4700,y:476,image:A(n),velocity:-2})],B=A(R),c=[new Platform({x:2910,y:423,image:A(P)}),new Platform({x:4760,y:423,image:A(y)}),new Platform({x:-1,y:549,image:B}),new Platform({x:B.width+150,y:549,image:B}),new Platform({x:6050,y:549,image:A(p)}),new Platform({x:8690,y:510,image:A(U)}),new Platform({x:7440,y:549,image:A(p)}),new Platform({x:5450,y:549,image:A(K)}),new Platform({x:5800,y:549,image:A(u)}),new Platform({x:0,y:417,image:A(b)}),new Platform({x:499,y:317,image:A(H)}),new Platform({x:2200,y:217,image:A(Q),collision:!0}),new Platform({x:3200,y:217,image:A(Q),collision:!0}),new Platform({x:4200,y:217,image:A(Q),collision:!0}),new Platform({x:5200,y:217,image:A(Q),collision:!0}),new Platform({x:6200,y:217,image:A(Q)}),new Platform({x:6500,y:317,image:A(v)}),new Platform({x:6300,y:423,image:A(y)}),new Platform({x:1370,y:442,image:A(O),collision:!0}),new Platform({x:499,y:7,image:A(a),collision:!0}),new Platform({x:1950,y:0,image:A(a),collision:!0}),new Platform({x:950,y:417,image:A(a),collision:!0}),new Platform({x:2700,y:317,image:A(a),collision:!0})],s=[new GenericObject({x:0,y:0,image:A(J)})],h=[new GenericForeground({x:0,y:620,velocity:0,image:A(g)}),new GenericForeground({x:2e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:4e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:6200,y:620,velocity:0,image:A(g)}),new GenericForeground({x:8e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:1e4,y:620,velocity:0,image:A(g)}),new GenericForeground({x:12e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:14e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:16e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:0,y:100,velocity:2,image:A(S)})];function M(){i=new Player({image:A(x)}),Y=0,X.innerHTML=Y,r=[new Enemy({x:900,y:476,image:A(n),velocity:-5}),new Enemy({x:900,y:248,image:A(n),velocity:-2}),new Enemy({x:1550,y:476,image:A(L),velocity:2}),new Enemy({x:1200,y:476,image:A(n),velocity:-1}),new Enemy({x:3500,y:476,image:A(n),velocity:-3}),new Enemy({x:3800,y:476,image:A(l),velocity:2})],B=A(R),c=[new Platform({x:2910,y:423,image:A(P)}),new Platform({x:4760,y:423,image:A(y)}),new Platform({x:-1,y:549,image:B}),new Platform({x:B.width+150,y:549,image:B}),new Platform({x:6050,y:549,image:A(p)}),new Platform({x:8690,y:510,image:A(U)}),new Platform({x:7440,y:549,image:A(p)}),new Platform({x:5450,y:549,image:A(K)}),new Platform({x:5800,y:549,image:A(u)}),new Platform({x:0,y:417,image:A(b)}),new Platform({x:499,y:317,image:A(H)}),new Platform({x:2200,y:217,image:A(Q),collision:!0}),new Platform({x:3200,y:217,image:A(Q),collision:!0}),new Platform({x:4200,y:217,image:A(Q),collision:!0}),new Platform({x:5200,y:217,image:A(Q),collision:!0}),new Platform({x:6200,y:217,image:A(Q)}),new Platform({x:6500,y:317,image:A(v)}),new Platform({x:6300,y:423,image:A(y)}),new Platform({x:1370,y:442,image:A(O),collision:!0}),new Platform({x:499,y:7,image:A(a),collision:!0}),new Platform({x:1950,y:0,image:A(a),collision:!0}),new Platform({x:950,y:417,image:A(a),collision:!0}),new Platform({x:2700,y:317,image:A(a),collision:!0})],w=[new Item({x:1390,y:390,image:A(o)}),new Item({x:2250,y:150,image:A(o)}),new Item({x:4050,y:475,image:A(o)}),new Item({x:4250,y:150,image:A(o)}),new Item({x:5990,y:475,image:A(o)})],s=[new GenericObject({x:0,y:0,image:A(J)})],h=[new GenericForeground({x:0,y:620,velocity:0,image:A(g)}),new GenericForeground({x:2e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:4e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:6200,y:620,velocity:0,image:A(g)}),new GenericForeground({x:8e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:1e4,y:620,velocity:0,image:A(g)}),new GenericForeground({x:12e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:14e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:16e3,y:620,velocity:0,image:A(g)}),new GenericForeground({x:0,y:100,velocity:2,image:A(S)})]}function j(){requestAnimationFrame(j),D.fillStyle="white",D.fillRect(0,0,m.width,m.height),s.forEach(e=>{e.draw()}),h.forEach(e=>{e.draw(),e.update()}),c.forEach(e=>{e.draw()}),w.forEach(e=>{e.draw()}),r.forEach(e=>{e.draw(),e.update()}),i.update(),k>=9350&&(s.forEach(e=>{e.position.x-=.6}),h.forEach(e=>{e.position.x-=10})),I.right.pressed&&i.position.x<600?i.velocity.x=5:I.left.pressed&&i.position.x>600||I.left.pressed&&k===0&&i.position.x>0?i.velocity.x=-5:(i.velocity.x=0,I.right.pressed?(k+=5,h.forEach(e=>{e.position.x-=5}),w.forEach(e=>{e.position.x-=5}),r.forEach(e=>{e.position.x-=5}),c.forEach(e=>{e.position.x-=5,s.forEach(t=>{t.position.x-=.2})})):I.left.pressed&&(k-=5,c.forEach(e=>{e.position.x+=5}),r.forEach(e=>{e.position.x+=5}),s.forEach(e=>{e.position.x+=4}),h.forEach(e=>{e.position.x+=5}),w.forEach(e=>{e.position.x+=5}))),r.forEach(e=>{c.forEach(t=>{e.position.x<t.position.x+t.width&&e.position.x+e.width>t.position.x&&e.position.y<t.position.y+t.height&&e.position.y+e.height>t.position.y&&t.collision===!0&&(e.velocity>0?(e.velocity=-e.velocity,e.image=A(n)):e.velocity<0&&(e.velocity=e.velocity*-1,e.image=A(l)))})}),c.forEach(e=>{i.position.y+i.height<=e.position.y&&i.position.y+i.height+i.velocity.y>=e.position.y&&i.position.x+i.width>=e.position.x&&i.position.x<=e.position.x+e.width&&(i.velocity.y=0)}),i.position.y>m.height&&M(),w=w.filter(e=>i.position.x<e.position.x+e.width&&i.position.x+i.width>e.position.x&&i.position.y<e.position.y+e.height&&i.position.y+i.height>e.position.y?(Y++,X.innerHTML=`<span>${Y}</span> BIERE`,!1):!0),r.forEach(e=>{i.position.x<e.position.x+e.width&&i.position.x+i.width>e.position.x&&i.position.y<e.position.y+e.height&&i.position.y+i.height>e.position.y?M():console.log("no collision")})}j();window.addEventListener("keydown",({keyCode:e})=>{switch(e){case 65:I.left.pressed=!0;break;case 37:I.left.pressed=!0;break;case 39:I.right.pressed=!0;break;case 68:I.right.pressed=!0;break;case 87:i.velocity.y===0&&(i.velocity.y-=25,G.play());break;case 38:i.velocity.y===0&&(i.velocity.y-=25,G.play());break}});window.addEventListener("keyup",({keyCode:e})=>{switch(e){case 65:I.left.pressed=!1;break;case 37:I.left.pressed=!1;break;case 39:I.right.pressed=!1;break;case 68:I.right.pressed=!1;break;case 87:i.velocity.y+=0;break;case 38:i.velocity.y+=0;break}});
