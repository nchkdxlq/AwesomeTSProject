//
//  NativeModuleToRNBridge.h
//  AwesomeTSProject
//
//  Created by Knox on 2022/5/28.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN


FOUNDATION_EXPORT UIView * _Nullable RCTBridgeSetupDefaultRootView(NSString *moduleName, NSDictionary * _Nullable initialProperties);

@interface NativeModuleToRNBridge : NSObject

+ (instancetype)new NS_UNAVAILABLE;
+ (instancetype)alloc NS_UNAVAILABLE;

+ (void)setupBridgeWithApplication:(UIApplication *)application launchoptions:(NSDictionary *)launchOptions;

+ (void)sendEventToModule:(Class)cls eventName:(NSString *)eventName body:(nullable id)body;

+ (nullable id)moduleForClass:(Class)moduleClass;

@end

NS_ASSUME_NONNULL_END
