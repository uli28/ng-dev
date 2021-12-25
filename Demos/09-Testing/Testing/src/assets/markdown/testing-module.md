Go to `demos/samples/component-testingmodule`. Notice that we are actually testing the nested `TestingModuleComponent` to avoid having Angular Material in this simple Component Test.

Notice also the different Testing approch between `TestingModuleInlineComponent` and `TestingModuleComponent` regarding the creation of the component instance and the use of `compileComponents()`