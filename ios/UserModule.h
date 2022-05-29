//
//  UserModule.h
//  AwesomeTSProject
//
//  Created by Knox on 2022/5/28.
//

#import <React/RCTEventEmitter.h>

NS_ASSUME_NONNULL_BEGIN

/// 继承 RCTEventEmitter 给 js 发送事件
@interface UserModule : RCTEventEmitter

- (void)appDidLogin;

@end

NS_ASSUME_NONNULL_END
