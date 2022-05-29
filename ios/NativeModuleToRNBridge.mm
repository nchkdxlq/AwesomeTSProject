//
//  NativeModuleToRNBridge.m
//  AwesomeTSProject
//
//  Created by Knox on 2022/5/28.
//

#import "NativeModuleToRNBridge.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTAppSetupUtils.h>

#import <React/RCTEventEmitter.h>

static RCTBridge *g_rctBridge;

UIView *RCTBridgeSetupDefaultRootView(NSString *moduleName, NSDictionary *initialProperties) {
  if (g_rctBridge == nil || moduleName.length == 0) return nil;
  return RCTAppSetupDefaultRootView(g_rctBridge, moduleName, initialProperties);
}

@interface NativeModuleToRNBridge () <RCTBridgeDelegate>

@property (nonatomic, strong) RCTBridge *rctBridge;

@end

@implementation NativeModuleToRNBridge


+ (instancetype)shared {
  static dispatch_once_t onceToken;
  static NativeModuleToRNBridge *instance;
  dispatch_once(&onceToken, ^{
    instance = [NativeModuleToRNBridge new];
  });
  return instance;
}

- (instancetype)initWithLaunchoptions:(NSDictionary *)launchOptions {
  if (self) {
    _rctBridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  }
  return self;
}

+ (void)setupBridgeWithApplication:(UIApplication *)application launchoptions:(NSDictionary *)launchOptions {
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    RCTAppSetupPrepareApp(application);
    g_rctBridge = [[RCTBridge alloc] initWithDelegate:NativeModuleToRNBridge.shared launchOptions:launchOptions];
  });
}


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}


+ (void)sendEventToModule:(Class)cls eventName:(NSString *)eventName body:(id)body {
  if (g_rctBridge == nil || eventName.length == 0) return;
  
  RCTEventEmitter *emitter = [g_rctBridge moduleForClass:cls];
  [emitter sendEventWithName:eventName body:body];
}


+ (id)moduleForClass:(Class)moduleClass {
  return [g_rctBridge moduleForClass:moduleClass];
}
@end
